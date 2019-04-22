import React from 'react';
import classnames from 'classnames';
import TimePanel from './time-panel';

export type TimePickerProps = {
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode,
} & typeof defaultProps;

const defaultProps = {
    prefixCls: 'ty-time-picker',
};

const TimePicker = (props: TimePickerProps) => {
    const { prefixCls, className, style } = props;
    const cls = classnames(prefixCls, className);

    return (
        <div className={cls} style={style}>
            <TimePanel count={24}/>
            <TimePanel count={60}/>
            <TimePanel count={60}/>
        </div>
    );
};

TimePicker.defaultProps = defaultProps;

export default TimePicker;
