import React from 'react';
import classnames from 'classnames';
import PickerHeader from './picker-header';
import PickerDay from './picker-day';

export type DatePickerProps = {
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode,
} & typeof defaultProps;

const defaultProps = {
    prefixCls: 'ty-date-picker',
};

const DatePicker = (props: DatePickerProps) => {
    const { prefixCls, className, style } = props;
    const cls = classnames(prefixCls, className);
    
    return (
        <div className={cls} style={style}>
            <PickerHeader />
            <PickerDay />
        </div>
    );
};

DatePicker.defaultProps = defaultProps;

export default DatePicker;
