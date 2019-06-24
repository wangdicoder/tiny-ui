import React, { useRef, useEffect, useState, ReactNode, MouseEvent, FormEvent, KeyboardEvent } from 'react';
import classnames from 'classnames';
import InputGroup from './input-group';
import InputGroupAddon from './input-group-addon';

export type InputSizes = 'sm' | 'md' | 'lg';

export type InputProps = {
    clearable?: boolean,
    prefix?: ReactNode,
    suffix?: ReactNode,
    value?: string,
    defaultValue?: string,
    onChange?: (value: any, event: FormEvent | MouseEvent) => void,
    onEnterPress?: (event: KeyboardEvent<HTMLInputElement>) => void,
    onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>, // prevent covering keydown event by enter press
    size?: InputSizes,
    disabled?: boolean,
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties,
    forwardedRef?: any,
    [prop: string]: any,
};

const defaultProps = {
    prefixCls: 'ty-input',
    size: 'md',
    disabled: false,
    clearable: false,
    defaultValue: '',
};

const DEFAULT_MARGIN = 16; // 8px * 2

const Input = (props: InputProps) => {
    const {
        clearable, prefix, suffix, onChange, size, onEnterPress, onKeyDown,
        disabled, prefixCls, className, style, forwardedRef, ...restProps
    } = props;
    const cls = classnames(prefixCls, className, `${prefixCls}_${size}`, {
        [`${prefixCls}_disabled`]: disabled,
    });
    const prefixRef = useRef<HTMLDivElement>(null);
    const suffixRef = useRef<HTMLDivElement>(null);
    const [value, setValue] = useState(('value' in props) ? props.value : props.defaultValue);
    const [inputPadding, setInputPadding] = useState({ paddingLeft: '7px', paddingRight: '7px' });

    const inputOnChange = (e: FormEvent<HTMLInputElement>) => {
        const val = e.currentTarget.value;
        !('value' in props) && setValue(val);
        onChange && onChange(e.currentTarget.value, e);
    };

    const inputOnKeydown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.keyCode === 13) {
            onEnterPress && onEnterPress(e);
        }
        onKeyDown && onKeyDown(e);
    };

    const clearBtnOnClick = (e: MouseEvent<HTMLSpanElement>) => {
        setValue('');
        onChange && onChange('', e);
    };

    const renderClearButton = () => {
        if (clearable && value && value.length > 0) {
            return (
                <span className={`${prefixCls}__clear-btn`} onClick={clearBtnOnClick}>
                    <svg viewBox="64 64 896 896" width="1em" height="1em" fill="currentColor" focusable="false">
                        <path
                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512
                            64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7
                            1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 0 1-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512
                            464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2
                            1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"/>
                    </svg>
                </span>
            );
        }
        return null;
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

        ('value' in props) && setValue(props.value);
    }, [props.value]);

    delete restProps.defaultValue;

    return (
        <div className={cls} style={style}>
            {prefix && <div ref={prefixRef} className={`${prefixCls}__prefix`}>{prefix}</div>}
            <input
                value={value}
                disabled={disabled}
                className={`${prefixCls}__input`}
                style={{ paddingLeft: inputPadding.paddingLeft, paddingRight: inputPadding.paddingRight }}
                onChange={inputOnChange}
                onKeyDown={inputOnKeydown}
                {...restProps}
            />
            {(suffix || clearable) && <div ref={suffixRef} className={`${prefixCls}__suffix`}>
                {renderClearButton()}
                {suffix}
            </div>}
        </div>
    );
};

Input.defaultProps = defaultProps;

Input.Group = InputGroup;
Input.Addon = InputGroupAddon;

export default Input;
