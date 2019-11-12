import React from 'react';
import classnames from 'classnames';
import { InputSizes } from './index';

export type InputGroupAddonProps = {
    noBorder: boolean,
    prefixCls?: string,
    disabled?: boolean,
    size?: InputSizes,
    className?: string,
    style?: React.CSSProperties,
    children: React.ReactNode,
} & typeof defaultProps;

const defaultProps = {
    prefixCls: 'ty-input-group-addon',
    disabled: false,
    size: 'md',
};

const InputGroupAddon = (props: InputGroupAddonProps) => {
    const { noBorder, size, disabled, prefixCls, className, style, children } = props;
    const cls = classnames(prefixCls, className, `${prefixCls}_${size}`, {
        [`${prefixCls}_no-border`]: noBorder,
    });

    if (React.isValidElement(children)) {
        return (
            <div className={cls} style={style}>
                {React.Children.map(children, (child) => {
                    const childProps = {
                        ...child.props,
                        size,
                        disabled,
                    };
                    return React.cloneElement(child, childProps);
                })}
            </div>
        );
    }
    return <div className={cls} style={style}>{children}</div>;
};

InputGroupAddon.defaultProps = defaultProps;

export default InputGroupAddon;
