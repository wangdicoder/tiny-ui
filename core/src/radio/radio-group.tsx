import React from 'react';
import classnames from 'classnames';
import { RadioProps } from '.';

export type RadioGroupProps = {
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
    const { value, onChange, disabled, prefixCls, className, style, children } = props;
    const cls = classnames(prefixCls, className);

    const _onChange = (checked: boolean, e: React.FormEvent<HTMLInputElement>) => {
        onChange && onChange(e.currentTarget.value, e);
    };

    return (
        <div className={cls} style={style}>
            {React.Children.map(children, (child) => {
                const childProps = {
                    ...child.props,
                    disabled,
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
