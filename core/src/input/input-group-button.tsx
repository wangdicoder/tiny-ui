import React from 'react';
import classnames from 'classnames';
import { InputSizes } from '.';
import Button, { ButtonColors } from '../button';

export type InputGroupButtonProps = {
    inside?: boolean,
    color?: ButtonColors,
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
    const { inside, color, disabled, size, onClick, prefixCls, className, style, children, ...restProps } = props;
    const cls = classnames(prefixCls, className, `${prefixCls}_${size}`, {
        [`${prefixCls}_disabled`]: disabled,
        [`${prefixCls}_inside`]: inside,
    });

    const btnOnClick = (e: React.MouseEvent<HTMLSpanElement>) => {
        onClick && onClick(e);
    };

    return (
        <div className={cls} style={style}{...restProps}>
            <Button
                color={color}
                size={size}
                disabled={disabled}
                onClick={btnOnClick}
                block
                className={`${prefixCls}__btn`}>
                {children}
            </Button>
        </div>
    );
};

InputGroupButton.defaultProps = defaultProps;

export default InputGroupButton;
