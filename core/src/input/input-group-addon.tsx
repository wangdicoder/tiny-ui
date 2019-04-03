import React from 'react';
import classnames from 'classnames';
import {InputSizes} from './index';

export type InputGroupAddonProps = {
    button?: boolean,
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
    button: false,
    size: 'md',
};

const InputGroupAddon = (props: InputGroupAddonProps) => {
    const { button, disabled, size, prefixCls, className, style, children, ...restProps } = props;
    const cls = classnames(prefixCls, className, `${prefixCls}_${size}`, {
        [`${prefixCls}_btn`]: button,
    });

    return (
        <span className={cls} style={style} {...restProps}>{children}</span>
    );
};

InputGroupAddon.defaultProps = defaultProps;

export default InputGroupAddon;
