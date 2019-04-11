import React from 'react';
import classnames from 'classnames';
import RadioGroup from './radio-group';

export type RadioProps = {
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
};

const Radio = (props: RadioProps) => {
    const { checked, value, defaultChecked, disabled, onChange, prefixCls, className, style, children } = props;
    const cls = classnames(prefixCls, className, {
        [`${prefixCls}_checked`]: checked,
        [`${prefixCls}_disabled`]: disabled,
    });

    const _onChange = (e: React.FormEvent<HTMLInputElement>) => {
        !disabled && onChange && onChange(e.currentTarget.checked, e);
    };

    return (
        <label className={cls} style={style}>
            <input
                disabled={disabled}
                value={value}
                className={`${prefixCls}__native`}
                type="radio"
                checked={checked}
                defaultChecked={defaultChecked}
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
