import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import CheckboxGroup from './checkbox-group';

export type CheckboxProps = {
    /** Only required when use checkbox group */
    value?: string,
    defaultChecked?: boolean,
    checked?: boolean,
    indeterminate?: boolean,
    disabled?: boolean,
    onChange?: (checked: boolean, event: React.FormEvent<HTMLInputElement>) => void,
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode,
} & typeof defaultProps;

const defaultProps = {
    prefixCls: 'ty-checkbox',
    defaultChecked: false,
};

const Checkbox = (props: CheckboxProps) => {
    const { value, disabled, onChange, indeterminate, prefixCls, className, style, children } = props;
    const [checked, setChecked] = useState(props.checked ? props.checked : props.defaultChecked);
    const cls = classnames(prefixCls, className, {
        [`${prefixCls}_indeterminate`]: indeterminate && !checked,
        [`${prefixCls}_checked`]: checked && !indeterminate,
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
                name={value}
                disabled={disabled}
                className={`${prefixCls}__native`}
                type="checkbox"
                checked={checked}
                onChange={_onChange}
            />
            <span className={`${prefixCls}__inner`}/>
            <span>{children}</span>
        </label>
    );
};

Checkbox.defaultProps = defaultProps;

Checkbox.Group = CheckboxGroup;

export default Checkbox;
