import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import TimePanel from './time-panel';

export type TimePickerProps = {
    defaultValue?: Date,
    value?: Date,
    onChange?: (date: Date) => void,
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode,
} & typeof defaultProps;

const defaultProps = {
    prefixCls: 'ty-time-picker',
    defaultValue: new Date(),
};

const TimePicker = (props: TimePickerProps) => {
    const { onChange, prefixCls, className, style } = props;
    const cls = classnames(prefixCls, className);
    const [date, setDate] = useState(props.value ? props.value : props.defaultValue);

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
    });

    return (
        <div className={cls} style={style}>
            <TimePanel value={date.getHours()} count={24} onChange={(hour) => updateTime('h', hour)}/>
            <TimePanel value={date.getMinutes()} count={60} onChange={(min) => updateTime('m', min)}/>
            <TimePanel value={date.getSeconds()} count={60} onChange={(sec) => updateTime('s', sec)}/>
        </div>
    );
};

TimePicker.defaultProps = defaultProps;

export default TimePicker;
