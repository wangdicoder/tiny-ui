import { useState, useRef, useCallback, useEffect, useContext } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { useLocale } from '../_utils/use-locale';
import { useClickOutside } from '../_utils/hooks';
import Popup from '../popup';
import PickerHeader from './picker-header';
import PickerDay from './picker-day';
import PickerMonth from './picker-month';
import PickerYear from './picker-year';
import { DatePickerProps, PanelMode } from './types';

export type { DatePickerProps, PanelMode, PickerType } from './types';

const CalendarIcon = () => (
  <svg viewBox="64 64 896 896" width="1em" height="1em" fill="currentColor">
    <path d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zm0-448H184V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136z" />
  </svg>
);

const ClearIcon = () => (
  <svg viewBox="64 64 896 896" width="1em" height="1em" fill="currentColor">
    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z" />
  </svg>
);

function formatDate(date: Date, format: string): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return format
    .replace('YYYY', String(y))
    .replace('MM', m)
    .replace('DD', d);
}

function getFormatByPicker(picker: string, customFormat?: string): string {
  if (customFormat) return customFormat;
  switch (picker) {
    case 'month': return 'YYYY-MM';
    case 'year': return 'YYYY';
    default: return 'YYYY-MM-DD';
  }
}

const DatePicker = (props: DatePickerProps) => {
  const {
    defaultValue,
    value,
    open: controlledOpen,
    picker = 'date',
    format: customFormat,
    disabled = false,
    placeholder,
    allowClear = true,
    size = 'md',
    showToday = true,
    inputReadOnly = true,
    disabledDate,
    renderExtraFooter,
    suffixIcon,
    onChange,
    onOpenChange,
    onPanelChange,
    className,
    style,
    prefixCls: customisedCls,
  } = props;

  const locale = useLocale();
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('date-picker', configContext.prefixCls, customisedCls);
  const format = getFormatByPicker(picker, customFormat);

  const [date, setDate] = useState<Date | null>(value ?? defaultValue ?? null);
  const [panelDate, setPanelDate] = useState<Date>(value ?? defaultValue ?? new Date());
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<PanelMode>(picker === 'date' ? 'date' : picker);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const isOpen = controlledOpen ?? open;

  // Controlled value
  useEffect(() => {
    if (value !== undefined) {
      setDate(value);
      if (value) setPanelDate(value);
    }
  }, [value]);

  useEffect(() => {
    if (controlledOpen !== undefined) setOpen(controlledOpen);
  }, [controlledOpen]);

  useClickOutside(wrapperRef.current as HTMLDivElement, () => {
    if (controlledOpen === undefined) setOpen(false);
    onOpenChange?.(false);
  });

  const toggleOpen = useCallback((val: boolean) => {
    if (controlledOpen === undefined) setOpen(val);
    onOpenChange?.(val);
    if (val) setMode(picker === 'date' ? 'date' : picker);
  }, [controlledOpen, onOpenChange, picker]);

  const fireChange = useCallback((d: Date | null) => {
    if (value === undefined) setDate(d);
    onChange?.(d, d ? formatDate(d, format) : '');
  }, [value, onChange, format]);

  const handleDateSelect = useCallback((d: Date) => {
    fireChange(d);
    toggleOpen(false);
  }, [fireChange, toggleOpen]);

  const handleMonthSelect = useCallback((d: Date) => {
    if (picker === 'month') {
      fireChange(d);
      toggleOpen(false);
    } else {
      setPanelDate(d);
      setMode('date');
      onPanelChange?.(d, 'date');
    }
  }, [picker, fireChange, toggleOpen, onPanelChange]);

  const handleYearSelect = useCallback((d: Date) => {
    if (picker === 'year') {
      fireChange(d);
      toggleOpen(false);
    } else {
      setPanelDate(d);
      setMode(picker === 'month' ? 'month' : 'month');
      onPanelChange?.(d, 'month');
    }
  }, [picker, fireChange, toggleOpen, onPanelChange]);

  const handleModeChange = useCallback((m: PanelMode) => {
    setMode(m);
    onPanelChange?.(panelDate, m);
  }, [panelDate, onPanelChange]);

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    fireChange(null);
    toggleOpen(false);
  };

  const handleToday = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    fireChange(today);
    setPanelDate(today);
    toggleOpen(false);
  };

  const hasValue = date !== null;
  const displayValue = hasValue ? formatDate(date, format) : '';
  const defaultPlaceholder = placeholder ?? (picker === 'month' ? locale.DatePicker.selectMonth : picker === 'year' ? locale.DatePicker.selectYear : locale.DatePicker.selectDate);

  const cls = classNames(prefixCls, className, `${prefixCls}_${size}`, {
    [`${prefixCls}_disabled`]: disabled,
    [`${prefixCls}_open`]: isOpen,
    [`${prefixCls}_has-value`]: hasValue,
  });

  const renderPanel = () => {
    switch (mode) {
      case 'year':
        return <PickerYear date={date} panelDate={panelDate} onChange={handleYearSelect} prefixCls={prefixCls} />;
      case 'month':
        return <PickerMonth date={date} panelDate={panelDate} months={locale.DatePicker.months} onChange={handleMonthSelect} prefixCls={prefixCls} />;
      default:
        return (
          <PickerDay
            date={date}
            panelDate={panelDate}
            weeks={locale.DatePicker.weeks}
            disabledDate={disabledDate}
            onChange={handleDateSelect}
            panelOnChange={setPanelDate}
            prefixCls={prefixCls}
          />
        );
    }
  };

  const renderOverlay = () => (
    <div className={`${prefixCls}__dropdown`}>
      <PickerHeader
        date={panelDate}
        mode={mode}
        months={locale.DatePicker.months}
        onChange={setPanelDate}
        onModeChange={handleModeChange}
        prefixCls={prefixCls}
      />
      {renderPanel()}
      {(showToday && mode === 'date' && picker === 'date') || renderExtraFooter ? (
        <div className={`${prefixCls}__footer`}>
          {renderExtraFooter?.(mode)}
          {showToday && mode === 'date' && picker === 'date' && (
            <a className={`${prefixCls}__today-btn`} onClick={handleToday}>{locale.DatePicker.today}</a>
          )}
        </div>
      ) : null}
    </div>
  );

  return (
    <div className={cls} style={style} ref={wrapperRef}>
      <Popup
        trigger="manual"
        placement="bottom"
        arrow={false}
        visible={isOpen}
        content={renderOverlay()}>
        <div className={`${prefixCls}__input`} onClick={() => !disabled && toggleOpen(!isOpen)}>
          <input
            className={`${prefixCls}__input-field`}
            readOnly={inputReadOnly}
            disabled={disabled}
            placeholder={defaultPlaceholder}
            value={displayValue}
            aria-expanded={isOpen}
            aria-haspopup="dialog"
            onKeyDown={(e) => {
              if (e.key === 'Escape' && isOpen) toggleOpen(false);
            }}
          />
          <span className={`${prefixCls}__suffix`}>
            {allowClear && hasValue && !disabled ? (
              <button type="button" className={`${prefixCls}__clear`} onClick={handleClear} aria-label="Clear date">
                <ClearIcon />
              </button>
            ) : null}
            <span className={`${prefixCls}__icon`}>
              {suffixIcon ?? <CalendarIcon />}
            </span>
          </span>
        </div>
      </Popup>
    </div>
  );
};

DatePicker.displayName = 'DatePicker';

export default DatePicker;
