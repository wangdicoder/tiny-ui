import React, { useEffect, useState, useRef } from 'react';
import classNames from 'classnames';
import TimePanel from './time-panel';
import { BaseProps } from '../_utils/props';

export interface TimePickerProps extends BaseProps {
  defaultValue?: Date;
  value?: Date;
  onChange?: (date: Date) => void;
  placeholder?: string;
  disabled?: boolean;
  children?: React.ReactNode;
}

const formatTime = (date: Date): string => {
  const h = String(date.getHours()).padStart(2, '0');
  const m = String(date.getMinutes()).padStart(2, '0');
  const s = String(date.getSeconds()).padStart(2, '0');
  return `${h}:${m}:${s}`;
};

const TimePicker = (props: TimePickerProps): React.ReactElement => {
  const {
    prefixCls = 'ty-time-picker',
    defaultValue = new Date(),
    value,
    onChange,
    placeholder = 'Select time',
    disabled = false,
    className,
    style,
  } = props;
  const cls = classNames(prefixCls, className, {
    [`${prefixCls}_disabled`]: disabled,
  });
  const [date, setDate] = useState(value ?? defaultValue);
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const updateTime = (type: string, num: number) => {
    const newDate = new Date(date);
    if (type === 'h') {
      newDate.setHours(num);
    } else if (type === 'm') {
      newDate.setMinutes(num);
    } else if (type === 's') {
      newDate.setSeconds(num);
    }

    setDate(newDate);
    if (!value) {
      onChange?.(newDate);
    }
  };

  useEffect(() => {
    if (value) setDate(value);
  }, [value]);

  const handleInputClick = () => {
    if (!disabled) {
      setOpen(!open);
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
          value={formatTime(date)}
        />
      </div>
      {open && (
        <div className={`${prefixCls}__dropdown`}>
          <TimePanel value={date.getHours()} count={24} onChange={(hour) => updateTime('h', hour)} />
          <TimePanel value={date.getMinutes()} count={60} onChange={(min) => updateTime('m', min)} />
          <TimePanel value={date.getSeconds()} count={60} onChange={(sec) => updateTime('s', sec)} />
        </div>
      )}
    </div>
  );
};

export default TimePicker;
