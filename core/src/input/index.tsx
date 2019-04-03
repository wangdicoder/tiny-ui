import React from 'react';
import classnames from 'classnames';
import InputGroup from './input-group';
import InputGroupAddon from './input-group-addon';

export type InputSizes = 'sm' | 'md' | 'lg';

export type InputProps = {
    defaultValue?: string,
    value?: string,
    onChange?: (value: any, event: React.FormEvent<HTMLInputElement>) => void,
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
    const { defaultValue, value, onChange, size, block, disabled, prefixCls, className, style, ...restProps } = props;
    const cls = classnames(prefixCls, className, `${prefixCls}_${size}`, {
        [`${prefixCls}_disabled`]: disabled,
        [`${prefixCls}_block`]: block,
    });

    const inputOnChange = (e: React.FormEvent<HTMLInputElement>) => {
        onChange && onChange(e.currentTarget.value, e);
    };

    return (
        <input
            defaultValue={defaultValue}
            value={value}
            disabled={disabled}
            className={cls}
            style={style}
            onChange={inputOnChange}
            {...restProps}
        />
    );
};

Input.defaultProps = defaultProps;

Input.Group = InputGroup;
Input.Addon = InputGroupAddon;

export default Input;
