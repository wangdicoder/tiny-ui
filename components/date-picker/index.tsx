import React, { useState, useRef, useCallback } from 'react';
import classNames from 'classnames';
import PickerHeader, { PickerMode } from './picker-header';
import PickerDay from './picker-day';
import PickerMonth from './picker-month';
import PickerYear from './picker-year';
import { BaseProps } from '../_utils/props';

export interface DatePickerProps extends BaseProps {
  defaultValue?: Date;
  value?: Date;
  onChange?: (date: Date) => void;
  format?: string;
  placeholder?: string;
  disabled?: boolean;
  children?: React.ReactNode;
}

const formatDate = (date: Date, format = 'YYYY-MM-DD'): string => {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return format.replace('YYYY', String(y)).replace('MM', m).replace('DD', d);
};

const DatePicker = (props: DatePickerProps) => {
  const {
    prefixCls = 'ty-date-picker',
    defaultValue,
    value,
    onChange,
    format = 'YYYY-MM-DD',
    placeholder = 'Select date',
    disabled = false,
    className,
    style,
  } = props;
  const cls = classNames(prefixCls, className, {
    [`${prefixCls}_disabled`]: disabled,
  });

  const [date, setDate] = useState<Date>(value ?? defaultValue ?? new Date());
  const [panelDate, setPanelDate] = useState<Date>(new Date(date));
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<PickerMode>('day');
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleDateChange = useCallback((newDate: Date) => {
    setDate(newDate);
    onChange?.(newDate);
    setOpen(false);
    setMode('day');
  }, [onChange]);

  const handleMonthSelect = useCallback((newDate: Date) => {
    setPanelDate(newDate);
    setMode('day');
  }, []);

  const handleYearSelect = useCallback((newDate: Date) => {
    setPanelDate(newDate);
    setMode('month');
  }, []);

  const handleInputClick = () => {
    if (!disabled) {
      setOpen(!open);
      setMode('day');
    }
  };

  const renderPanel = () => {
    switch (mode) {
      case 'month':
        return (
          <PickerMonth
            date={date}
            panelDate={panelDate}
            onChange={handleMonthSelect}
          />
        );
      case 'year':
        return (
          <PickerYear
            date={date}
            panelDate={panelDate}
            onChange={handleYearSelect}
          />
        );
      default:
        return (
          <PickerDay
            date={date}
            onChange={handleDateChange}
            panelDate={panelDate}
            panelOnChange={(val) => setPanelDate(val)}
          />
        );
    }
  };

  return (
    <div className={cls} style={style} ref={wrapperRef}>
      <div className={`${prefixCls}__input-wrapper`} onClick={handleInputClick}>
        <input
          className={`${prefixCls}__input`}
          readOnly
          disabled={disabled}
          placeholder={placeholder}
          value={date ? formatDate(date, format) : ''}
        />
      </div>
      {open && (
        <div className={`${prefixCls}__dropdown`}>
          <PickerHeader
            date={panelDate}
            mode={mode}
            onChange={(val) => setPanelDate(val)}
            onModeChange={setMode}
          />
          {renderPanel()}
        </div>
      )}
    </div>
  );
};

export default DatePicker;
