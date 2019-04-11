import React from 'react';
import classnames from 'classnames';

export type SwitchProps = {
    defaultChecked?: boolean,
    checked?: boolean,
    disabled?: boolean,
    loading?: boolean,
    size?: 'sm' | 'md' | 'lg',
    onChange?: (checked: boolean, event: React.MouseEvent) => void,
    checkedText?: React.ReactNode,
    uncheckedText?: React.ReactNode,
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode,
} & typeof defaultProps;

const defaultProps = {
    prefixCls: 'ty-switch',
    size: 'md',
};

const Switch = (props: SwitchProps) => {
    const {
        checked, size, disabled, loading, onChange, checkedText, uncheckedText,
        prefixCls, className, style,
    } = props;
    const cls = classnames(prefixCls, className, `${prefixCls}_${size}`, {
        [`${prefixCls}_checked`]: checked,
        [`${prefixCls}_loading`]: loading,
        [`${prefixCls}_disabled`]: loading || disabled,

    });

    const _onClick = (e: React.MouseEvent<HTMLSpanElement>) => {
        !(disabled || loading) && onChange && onChange(!checked, e);
    };

    return (
        <label className={cls} style={style} onClick={_onClick}>
            <span className={`${prefixCls}__bg`}>
                <span className={`${prefixCls}__thumb`}/>
                <span className={`${prefixCls}__label`}>{checked ? checkedText : uncheckedText}</span>
            </span>
        </label>
    );
};

Switch.defaultProps = defaultProps;

export default Switch;
