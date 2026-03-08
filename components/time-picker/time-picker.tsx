import { useEffect, useState, useRef, useCallback, useContext, useMemo } from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { useLocale } from '../_utils/use-locale';
import TimePanel from './time-panel';
import { TimePickerProps } from './types';

const ClockIcon = () => (
  <svg viewBox="64 64 896 896" width="1em" height="1em" fill="currentColor">
    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
    <path d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z" />
  </svg>
);

const ClearIcon = () => (
  <svg viewBox="64 64 896 896" width="1em" height="1em" fill="currentColor">
    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z" />
  </svg>
);

function formatTime(date: Date, format: string, use12Hours: boolean): string {
  let h = date.getHours();
  const m = String(date.getMinutes()).padStart(2, '0');
  const s = String(date.getSeconds()).padStart(2, '0');
  let period = '';

  if (use12Hours) {
    period = h >= 12 ? ' PM' : ' AM';
    h = h % 12 || 12;
  }

  return format
    .replace('HH', String(h).padStart(2, '0'))
    .replace('H', String(h))
    .replace('mm', m)
    .replace('ss', s) + period;
}

function generateSteps(count: number, step: number): number[] {
  const items: number[] = [];
  for (let i = 0; i < count; i += step) {
    items.push(i);
  }
  return items;
}

function showsSeconds(format: string): boolean {
  return format.includes('ss') || format.includes('s');
}

function showsMinutes(format: string): boolean {
  return format.includes('mm') || format.includes('m');
}

const TimePicker = (props: TimePickerProps): React.ReactElement => {
  const locale = useLocale();
  const {
    defaultValue,
    value,
    open: controlledOpen,
    format = 'HH:mm:ss',
    use12Hours = false,
    hourStep = 1,
    minuteStep = 1,
    secondStep = 1,
    disabled = false,
    placeholder = locale.TimePicker.selectTime,
    allowClear = true,
    size = 'md',
    inputReadOnly = true,
    disabledTime,
    hideDisabledOptions = false,
    renderExtraFooter,
    suffixIcon,
    onChange,
    onOpenChange,
    className,
    style,
    prefixCls: customisedCls,
  } = props;

  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('time-picker', configContext.prefixCls, customisedCls);

  const [date, setDate] = useState<Date | null>(value ?? defaultValue ?? null);
  const [open, setOpen] = useState(false);
  const [dropdownStyle, setDropdownStyle] = useState<React.CSSProperties>({});
  const wrapperRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isOpen = controlledOpen ?? open;

  // Controlled value
  useEffect(() => {
    if (value !== undefined) setDate(value);
  }, [value]);

  // Controlled open
  useEffect(() => {
    if (controlledOpen !== undefined) setOpen(controlledOpen);
  }, [controlledOpen]);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        wrapperRef.current && !wrapperRef.current.contains(target) &&
        dropdownRef.current && !dropdownRef.current.contains(target)
      ) {
        toggleOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Position dropdown below input
  useEffect(() => {
    if (isOpen && wrapperRef.current) {
      const rect = wrapperRef.current.getBoundingClientRect();
      setDropdownStyle({
        position: 'absolute',
        top: rect.bottom + 4 + window.scrollY,
        left: rect.left + window.scrollX,
        zIndex: 1050,
      });
    }
  }, [isOpen]);

  const toggleOpen = useCallback((val: boolean) => {
    if (controlledOpen === undefined) setOpen(val);
    onOpenChange?.(val);
  }, [controlledOpen, onOpenChange]);

  const updateTime = useCallback((type: 'h' | 'm' | 's', num: number) => {
    const base = date ? new Date(date) : new Date();
    if (type === 'h') base.setHours(num);
    else if (type === 'm') base.setMinutes(num);
    else base.setSeconds(num);

    if (value === undefined) setDate(base);
    onChange?.(base);
  }, [date, value, onChange]);

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (value === undefined) setDate(null);
    onChange?.(null);
    toggleOpen(false);
  };

  // Disabled time calculation
  const disabled12 = useMemo(() => disabledTime?.() ?? {}, [disabledTime]);
  const disabledHours = useMemo(() => disabled12.disabledHours?.() ?? [], [disabled12]);
  const currentHour = date?.getHours() ?? 0;
  const disabledMinutes = useMemo(
    () => disabled12.disabledMinutes?.(currentHour) ?? [],
    [disabled12, currentHour]
  );
  const currentMinute = date?.getMinutes() ?? 0;
  const disabledSeconds = useMemo(
    () => disabled12.disabledSeconds?.(currentHour, currentMinute) ?? [],
    [disabled12, currentHour, currentMinute]
  );

  const hours = generateSteps(24, hourStep);
  const minutes = generateSteps(60, minuteStep);
  const seconds = generateSteps(60, secondStep);

  const filteredHours = hideDisabledOptions ? hours.filter((h) => !disabledHours.includes(h)) : hours;
  const filteredMinutes = hideDisabledOptions ? minutes.filter((m) => !disabledMinutes.includes(m)) : minutes;
  const filteredSeconds = hideDisabledOptions ? seconds.filter((s) => !disabledSeconds.includes(s)) : seconds;

  const hasValue = date !== null;
  const displayValue = hasValue ? formatTime(date, format, use12Hours) : '';

  const cls = classNames(prefixCls, className, `${prefixCls}_${size}`, {
    [`${prefixCls}_disabled`]: disabled,
    [`${prefixCls}_open`]: isOpen,
    [`${prefixCls}_has-value`]: hasValue,
  });

  const dropdown = isOpen
    ? createPortal(
        <div className={`${prefixCls}__dropdown`} ref={dropdownRef} style={dropdownStyle}>
          <div className={`${prefixCls}__panel`}>
            <TimePanel
              prefixCls={prefixCls}
              value={date?.getHours() ?? 0}
              items={filteredHours}
              disabledItems={hideDisabledOptions ? [] : disabledHours}
              onChange={(h) => updateTime('h', h)}
            />
            {showsMinutes(format) && (
              <TimePanel
                prefixCls={prefixCls}
                value={date?.getMinutes() ?? 0}
                items={filteredMinutes}
                disabledItems={hideDisabledOptions ? [] : disabledMinutes}
                onChange={(m) => updateTime('m', m)}
              />
            )}
            {showsSeconds(format) && (
              <TimePanel
                prefixCls={prefixCls}
                value={date?.getSeconds() ?? 0}
                items={filteredSeconds}
                disabledItems={hideDisabledOptions ? [] : disabledSeconds}
                onChange={(s) => updateTime('s', s)}
              />
            )}
          </div>
          {renderExtraFooter && (
            <div className={`${prefixCls}__footer`}>
              {renderExtraFooter()}
            </div>
          )}
        </div>,
        document.body
      )
    : null;

  return (
    <div className={cls} style={style} ref={wrapperRef}>
      <div
        className={`${prefixCls}__input`}
        onClick={() => !disabled && toggleOpen(!isOpen)}>
        <input
          className={`${prefixCls}__input-field`}
          readOnly={inputReadOnly}
          disabled={disabled}
          placeholder={placeholder}
          value={displayValue}
          aria-expanded={isOpen}
          aria-haspopup="dialog"
          onKeyDown={(e) => {
            if (e.key === 'Escape' && isOpen) toggleOpen(false);
          }}
        />
        <span className={`${prefixCls}__suffix`}>
          {allowClear && hasValue && !disabled ? (
            <button type="button" className={`${prefixCls}__clear`} onClick={handleClear} aria-label="Clear time">
              <ClearIcon />
            </button>
          ) : null}
          <span className={`${prefixCls}__icon`}>
            {suffixIcon ?? <ClockIcon />}
          </span>
        </span>
      </div>
      {dropdown}
    </div>
  );
};

TimePicker.displayName = 'TimePicker';

export default TimePicker;
