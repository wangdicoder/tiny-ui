import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import RadioGroup from './radio-group';

export type RadioProps = {
    name?: string,
    defaultChecked?: boolean,
    checked?: boolean,
    value?: string,
    onChange?: (checked: boolean, event: React.FormEvent<HTMLInputElement>) => void,
    disabled?: boolean,
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode,
} & typeof defaultProps;

const defaultProps = {
    prefixCls: 'ty-radio',
    defaultChecked: false,
};

const Radio = (props: RadioProps) => {
    const { name, value, disabled, onChange, prefixCls, className, style, children } = props;
    const [checked, setChecked] = useState(('checked' in props) ? props.checked : props.defaultChecked);
    const cls = classnames(prefixCls, className, {
        [`${prefixCls}_checked`]: checked,
        [`${prefixCls}_disabled`]: disabled,
    });

    const _onChange = (e: React.FormEvent<HTMLInputElement>) => {
        if (!disabled) {
            !('checked' in props) && setChecked(e.currentTarget.checked);
            onChange && onChange(e.currentTarget.checked, e);
        }
    };

    useEffect(() => {
        ('checked' in props) && setChecked(props.checked!);
    });

    return (
        <label className={cls} style={style}>
            <input
                name={name}
                disabled={disabled}
                value={value}
                className={`${prefixCls}__native`}
                type="radio"
                checked={checked}
                onChange={_onChange}
            />
            <span className={`${prefixCls}__inner`}/>
            <span>{children}</span>
        </label>
    );
};

Radio.defaultProps = defaultProps;

Radio.Group = RadioGroup;

export default Radio;
