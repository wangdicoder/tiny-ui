import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import TimePanel from './time-panel';
import { BaseProps } from '../_utils/props';

export interface TimePickerProps extends BaseProps {
  defaultValue?: Date;
  value?: Date;
  onChange?: (date: Date) => void;
  children?: React.ReactNode;
}

const TimePicker = (props: TimePickerProps): React.ReactElement => {
  const {
    prefixCls = 'ty-time-picker',
    defaultValue = new Date(),
    onChange,
    className,
    style,
  } = props;
  const cls = classNames(prefixCls, className);
  const [date, setDate] = useState(props.value ? props.value : defaultValue);

  const updateTime = (type: string, num: number) => {
    if (type === 'h') {
      date.setHours(num);
    } else if (type === 'm') {
      date.setMinutes(num);
    } else if (type === 's') {
      date.setSeconds(num);
    }

    setDate(date);
    !props.value && onChange && onChange(date);
  };

  useEffect(() => {
    props.value && setDate(props.value);
  }, [props.value]);

  return (
    <div className={cls} style={style}>
      <TimePanel value={date.getHours()} count={24} onChange={hour => updateTime('h', hour)} />
      <TimePanel value={date.getMinutes()} count={60} onChange={min => updateTime('m', min)} />
      <TimePanel value={date.getSeconds()} count={60} onChange={sec => updateTime('s', sec)} />
    </div>
  );
};

export default TimePicker;
