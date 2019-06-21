import React, { FormEvent, KeyboardEvent } from 'react';
import classnames from 'classnames';
import InputGroup from './input-group';
import InputGroupAddon from './input-group-addon';

export type InputSizes = 'sm' | 'md' | 'lg';

export type InputProps = {
    inside?: boolean,
    defaultValue?: string,
    value?: string,
    onChange?: (value: any, event: FormEvent<HTMLInputElement>) => void,
    onEnterPress?: (event: KeyboardEvent<HTMLInputElement>) => void,
    onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>, // prevent covering keydown event by enter press
    size?: InputSizes,
    disabled?: boolean,
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties,
} & typeof defaultProps;

const defaultProps = {
    prefixCls: 'ty-input',
    size: 'md',
    disabled: false,
};

const Input = (props: InputProps) => {
    const {
        inside, defaultValue, value, onChange, size, onEnterPress, onKeyDown,
        disabled, prefixCls, className, style, ...restProps
    } = props;
    const cls = classnames(prefixCls, className, `${prefixCls}_${size}`, {
        [`${prefixCls}_disabled`]: disabled,
        [`${prefixCls}_inside`]: inside,
    });

    const inputOnChange = (e: FormEvent<HTMLInputElement>) => {
        onChange && onChange(e.currentTarget.value, e);
    };

    const inputOnKeydown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.keyCode === 13) {
            onEnterPress && onEnterPress(e);
        }
        onKeyDown && onKeyDown(e);
    };

    return (
        <input
            defaultValue={defaultValue}
            value={value}
            disabled={disabled}
            className={cls}
            style={style}
            onChange={inputOnChange}
            onKeyDown={inputOnKeydown}
            {...restProps}
        />
    );
};

Input.defaultProps = defaultProps;

Input.Group = InputGroup;
Input.Addon = InputGroupAddon;

export default Input;
