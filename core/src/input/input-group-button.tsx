import React from 'react';
import classnames from 'classnames';
import {InputSizes} from './index';

export type InputGroupButtonProps = {
    inside?: boolean,
    onClick?: React.MouseEventHandler<HTMLSpanElement>,
    disabled?: boolean,
    prefixCls?: string,
    size?: InputSizes,
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode,
} & typeof defaultProps;

const defaultProps = {
    prefixCls: 'ty-input-group-btn',
    disabled: false,
    size: 'md',
};

const InputGroupButton = (props: InputGroupButtonProps) => {
    const { inside, disabled, size, onClick, prefixCls, className, style, children, ...restProps } = props;
    const cls = classnames(prefixCls, className, `${prefixCls}_${size}`, {
        [`${prefixCls}_disabled`]: disabled,
        [`${prefixCls}_inside`]: inside,
    });

    const _btnOnClick = (e: React.MouseEvent<HTMLSpanElement>) => {
        !disabled && onClick && onClick(e);
    };

    return <span className={cls} style={style} onClick={_btnOnClick} {...restProps}>{children}</span>;
};

InputGroupButton.defaultProps = defaultProps;

export default InputGroupButton;
