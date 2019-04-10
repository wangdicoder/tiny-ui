import React from 'react';
import classnames from 'classnames';

export type SwitchProps = {
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode,
} & typeof defaultProps;

const defaultProps = {
    prefixCls: 'ty-switch',
};

const Switch = (props: SwitchProps) => {
    const { prefixCls, className, style } = props;
    const cls = classnames(prefixCls, className);
    
    return (
        <span className={cls} style={style}>

        </span>
    );
};

Switch.defaultProps = defaultProps;

export default Switch;
