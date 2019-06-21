import React from 'react';
import classnames from 'classnames';
import { InputSizes } from '.';

export type InputGroupAddonProps = {
    inside?: boolean,
    noBorder: boolean,
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
    const { noBorder, inside, size, prefixCls, className, style, children } = props;
    const cls = classnames(prefixCls, className, `${prefixCls}_${size}`, {
        [`${prefixCls}_inside`]: inside,
        [`${prefixCls}_no-border`]: noBorder,
    });

    return <div className={cls} style={style}>{children}</div>;
};

InputGroupAddon.defaultProps = defaultProps;

export default InputGroupAddon;
