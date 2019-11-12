import React, { useRef, useEffect, useState, ReactNode, MouseEvent, FormEvent, KeyboardEvent } from 'react';
import classnames from 'classnames';
import InputGroup from './input-group';
import InputGroupAddon from './input-group-addon';
import Icon from '../icon';

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
        disabled, prefixCls, className, style, ...restProps
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
                   <Icon type="close-fill"/>
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
