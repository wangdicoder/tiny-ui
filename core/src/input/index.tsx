import React, { useRef, useEffect, useState, ReactNode, FormEvent, KeyboardEvent } from 'react';
import classnames from 'classnames';
import InputGroup from './input-group';
import InputGroupAddon from './input-group-addon';

export type InputSizes = 'sm' | 'md' | 'lg';

export type InputProps = {
    prefix?: ReactNode,
    suffix?: ReactNode,
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

const DEFAULT_MARGIN = 16; // 8px * 2

const Input = (props: InputProps) => {
    const {
        prefix, suffix, defaultValue, value, onChange, size, onEnterPress, onKeyDown,
        disabled, prefixCls, className, style, ...restProps
    } = props;
    const cls = classnames(prefixCls, className, `${prefixCls}_${size}`, {
        [`${prefixCls}_disabled`]: disabled,
    });
    const prefixRef = useRef<HTMLDivElement>(null);
    const suffixRef = useRef<HTMLDivElement>(null);
    const [inputPadding, setInputPadding] = useState({ paddingLeft: '7px', paddingRight: '7px' });

    const inputOnChange = (e: FormEvent<HTMLInputElement>) => {
        onChange && onChange(e.currentTarget.value, e);
    };

    const inputOnKeydown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.keyCode === 13) {
            onEnterPress && onEnterPress(e);
        }
        onKeyDown && onKeyDown(e);
    };

    useEffect(() => {
        const prefixWidth = prefixRef.current && prefixRef.current.offsetWidth;
        const suffixWidth = suffixRef.current && suffixRef.current.offsetWidth;
        const padding = { ...inputPadding };
        if (prefixWidth) {
            padding.paddingLeft = prefixWidth + DEFAULT_MARGIN + 'px';
        }
        if (suffixWidth) {
            padding.paddingRight = suffixWidth + DEFAULT_MARGIN + 'px';
        }
        setInputPadding(padding);
    }, []);

    return (
        <div className={`${prefixCls}__wrapper`}>
            <div ref={prefixRef} className={`${prefixCls}__prefix`}>{prefix}</div>
            <input
                defaultValue={defaultValue}
                value={value}
                disabled={disabled}
                className={cls}
                style={{ paddingLeft: inputPadding.paddingLeft, paddingRight: inputPadding.paddingRight, ...style }}
                onChange={inputOnChange}
                onKeyDown={inputOnKeydown}
                {...restProps}
            />
            <div ref={suffixRef} className={`${prefixCls}__suffix`}>{suffix}</div>
        </div>
    );
};

Input.defaultProps = defaultProps;

Input.Group = InputGroup;
Input.Addon = InputGroupAddon;

export default Input;
