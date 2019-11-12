import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import { RadioProps } from './index';

export type RadioGroupProps = {
    name?: string,
    defaultValue?: string,
    value?: string,
    onChange?: (value: string, event: React.FormEvent<HTMLInputElement>) => void,
    disabled?: boolean,
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties,
    children: React.ReactElement<RadioProps>,
} & typeof defaultProps;

const defaultProps = {
    prefixCls: 'ty-radio-group',
};

const RadioGroup = (props: RadioGroupProps) => {
    const { name, onChange, disabled, prefixCls, className, style, children } = props;
    const cls = classnames(prefixCls, className);
    const [value, setValue] = useState(('value' in props) ? props.value : props.defaultValue);

    const _onChange = (checked: boolean, e: React.FormEvent<HTMLInputElement>) => {
        if (!disabled) {
            !('value' in props) && setValue(e.currentTarget.value);
            onChange && onChange(e.currentTarget.value, e);
        }
    };

    useEffect(() => {
        ('value' in props) && setValue(props.value!);
    });

    return (
        <div className={cls} style={style}>
            {React.Children.map(children, (child) => {
                const childProps = {
                    ...child.props,
                    name,
                    disabled: child.props.disabled || disabled,
                    checked: value === child.props.value,
                    onChange: _onChange,
                };
                return React.cloneElement(child, childProps);
            })}
        </div>
    );
};

RadioGroup.defaultProps = defaultProps;

export default RadioGroup;
