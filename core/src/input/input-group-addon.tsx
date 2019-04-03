import React from 'react';
import classnames from 'classnames';
import { InputSizes } from './index';

export type InputGroupAddonProps = {
    inside?: boolean,
    disabled?: boolean,
    prefixCls?: string,
    size?: InputSizes,
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode,
} & typeof defaultProps;

const defaultProps = {
    prefixCls: 'ty-input-group-addon',
    disabled: false,
    size: 'md',
};

const InputGroupAddon = (props: InputGroupAddonProps) => {
    const { inside, disabled, size, prefixCls, className, style, children } = props;
    const cls = classnames(prefixCls, className, `${prefixCls}_${size}`, {
        [`${prefixCls}_disabled`]: disabled,
        [`${prefixCls}_inside`]: inside,
    });

    return <span className={cls} style={style}>{children}</span>;
};

InputGroupAddon.defaultProps = defaultProps;

export default InputGroupAddon;
