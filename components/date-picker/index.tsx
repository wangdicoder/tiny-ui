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
    const [date, setDate] = useState(props.value ? props.value : props.defaultValue);
    const [panelDate, setPanelDate] = useState(new Date());

    useEffect(() => {

    });

    return (
        <div className={cls} style={style}>
            <PickerHeader date={panelDate} onChange={(val) => setPanelDate(val)}/>
            <PickerDay
                date={date}
                onChange={(val) => setDate(val)}
                panelDate={panelDate}
                panelOnChange={(val) => setPanelDate(val)}
            />
        </div>
    );
};

DatePicker.defaultProps = defaultProps;

export default DatePicker;
