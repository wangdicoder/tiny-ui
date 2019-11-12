import React from 'react';
import classnames from 'classnames';
import Option, { NativeSelectOptionProps } from './option';
import Group, { NativeSelectGroupProps } from './group';

export type NativeSelectSizes = 'sm' | 'md' | 'lg';

export type NativeSelectProps = {
    size?: NativeSelectSizes,
    disabled?: boolean,
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties,
    children: React.ReactElement<NativeSelectGroupProps | NativeSelectOptionProps>,
} & typeof defaultProps;

const defaultProps = {
    prefixCls: 'ty-select-native',
    size: 'md',
    disabled: false,
};

const NativeSelect = (props: NativeSelectProps) => {
    const { size, disabled, prefixCls, className, style, children, ...restProps } = props;
    const cls = classnames(prefixCls, className, {
        [`${prefixCls}_${size}`]: size,
        [`${prefixCls}_disabled`]: disabled,
    });

    return (
        <select className={cls} style={style} {...restProps}>
            {React.Children.map(children, (child: React.ReactElement) => {
                return React.cloneElement(child, { ...child.props, disabled });
            })}
        </select>
    );
};

NativeSelect.defaultProps = defaultProps;

NativeSelect.Option = Option;
NativeSelect.Group = Group;

export default NativeSelect;
