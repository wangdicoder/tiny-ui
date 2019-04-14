import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import PickerHeader from './picker-header';
import PickerDay from './picker-day';

export type DatePickerProps = {
    defaultValue?: Date,
    value?: Date,
    onChange?: (date: Date) => void,
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode,
} & typeof defaultProps;

const defaultProps = {
    prefixCls: 'ty-date-picker',
    defaultValue: new Date(),
};

const DatePicker = (props: DatePickerProps) => {
    const { prefixCls, className, style } = props;
    const cls = classnames(prefixCls, className);
    const [date, setDate] = useState(('value' in props) ? props.value : props.defaultValue);

    useEffect(() => {

    });

    return (
        <div className={cls} style={style}>
            <PickerHeader/>
            <PickerDay date={date} onChange={(val) => setDate(val)}/>
        </div>
    );
};

DatePicker.defaultProps = defaultProps;

export default DatePicker;
