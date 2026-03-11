import { useState, useRef, useCallback, useEffect, useContext } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { useLocale } from '../_utils/use-locale';
import { CalendarIcon, ClearIcon } from '../_utils/components';
import Popup from '../popup';
import PickerHeader from './picker-header';
import PickerDay from './picker-day';
import PickerMonth from './picker-month';
import PickerYear from './picker-year';
import { DatePickerProps, PanelMode } from './types';


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
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const listener = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (wrapperRef.current?.contains(target) || dropdownRef.current?.contains(target)) return;
      if (controlledOpen === undefined) setOpen(false);
      onOpenChange?.(false);
    };
    document.addEventListener('click', listener);
    return () => document.removeEventListener('click', listener);
  }, [controlledOpen, onOpenChange]);

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
    <div className={`${prefixCls}__dropdown`} ref={dropdownRef}>
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
        placement="bottom-start"
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
                <ClearIcon size="1em" />
              </button>
            ) : null}
            <span className={`${prefixCls}__icon`}>
              {suffixIcon ?? <CalendarIcon size="1em" />}
            </span>
          </span>
        </div>
      </Popup>
    </div>
  );
};

DatePicker.displayName = 'DatePicker';

export default DatePicker;
