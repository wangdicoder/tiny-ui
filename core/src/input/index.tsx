import React from 'react';
import classnames from 'classnames';
import InputGroup from './input-group';
import InputGroupAddon from './input-group-addon';
import InputGroupButton from './input-group-button';

export type InputSizes = 'sm' | 'md' | 'lg';

export type InputProps = {
    defaultValue?: string,
    value?: string,
    onChange?: (value: any, event: React.FormEvent<HTMLInputElement>) => void,
    onEnterPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void,
    onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>, // prevent covering keydown event by enter press
    size?: InputSizes,
    disabled?: boolean,
    block?: boolean,
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties,
} & typeof defaultProps;

const defaultProps = {
    prefixCls: 'ty-input',
    size: 'md',
    disabled: false,
    block: false,
};

const Input = (props: InputProps) => {
    const { defaultValue, value, onChange, size, block, onEnterPress, onKeyDown,
        disabled, prefixCls, className, style, ...restProps } = props;
    const cls = classnames(prefixCls, className, `${prefixCls}_${size}`, {
        [`${prefixCls}_disabled`]: disabled,
        [`${prefixCls}_block`]: block,
    });

    const _inputOnChange = (e: React.FormEvent<HTMLInputElement>) => {
        onChange && onChange(e.currentTarget.value, e);
    };

    const _inputOnKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
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
            onChange={_inputOnChange}
            onKeyDown={_inputOnKeydown}
            {...restProps}
        />
    );
};

Input.defaultProps = defaultProps;

Input.Group = InputGroup;
Input.Addon = InputGroupAddon;
Input.Button = InputGroupButton;

export default Input;
