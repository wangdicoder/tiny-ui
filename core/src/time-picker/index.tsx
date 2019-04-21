import * as React from 'react';
import classnames from 'classnames';

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

        </div>
    );
};

TimePicker.defaultProps = defaultProps;

export default TimePicker;
