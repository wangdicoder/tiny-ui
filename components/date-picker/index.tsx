import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import PickerHeader from './picker-header';
import PickerDay from './picker-day';
import { BaseProps } from '../_utils/props';

export interface DatePickerProps extends BaseProps {
  defaultValue?: Date;
  value?: Date;
  onChange?: (date: Date) => void;
  children?: React.ReactNode;
}

const DatePicker = ({
  prefixCls = 'ty-date-picker',
  defaultValue = new Date(),
  ...restProps
}: DatePickerProps) => {
  const { className, style } = restProps;
  const cls = classNames(prefixCls, className);
  const [date, setDate] = useState(restProps.value ? restProps.value : defaultValue);
  const [panelDate, setPanelDate] = useState(new Date());

  useEffect(() => {});

  return (
    <div className={cls} style={style}>
      <PickerHeader date={panelDate} onChange={val => setPanelDate(val)} />
      <PickerDay
        date={date}
        onChange={val => setDate(val)}
        panelDate={panelDate}
        panelOnChange={val => setPanelDate(val)}
      />
    </div>
  );
};

export default DatePicker;
