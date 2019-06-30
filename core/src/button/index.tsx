import React from 'react';
import classnames from 'classnames';
import Group from './button-group';

export type ButtonColors = 'default' | 'primary' | 'blue' | 'red' | 'yellow' | 'green' ;
export type ButtonSizes = 'sm' | 'md' | 'lg';

export type ButtonProps = {
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    color?: ButtonColors,
    loading?: boolean,
    disabled?: boolean,
    block?: boolean,
    size?: ButtonSizes,
    round?: boolean,
    icon?: React.ReactNode,
    link?: boolean,
    className?: string,
    children?: React.ReactNode,
    prefixCls?: string,
    style?: React.CSSProperties,
} & typeof defaultProps;

const defaultProps = {
    prefixCls: 'ty-btn',
    size: 'md',
    color: 'default',
    loading: false,
    disabled: false,
};

const Button = (props: ButtonProps) => {
    const {
        color, size, block, icon, link, loading, disabled, onClick,
        round, children, className, prefixCls, style, ...restProps
    } = props;
    const cls = classnames(prefixCls, className, {
        [`${prefixCls}_${color}`]: color,
        [`${prefixCls}_${size}`]: size,
        [`${prefixCls}_link`]: link,
        [`${prefixCls}_block`]: block,
        [`${prefixCls}_round`]: round,
        [`${prefixCls}_disabled`]: disabled,
        [`${prefixCls}_loading`]: loading,
    });

    const renderIcon = () => {
        if (loading) {
            return <span className={`${prefixCls}__loader`}/>;
        } else {
            return icon;
        }
    };

    return (
        <button
            onClick={onClick}
            className={cls}
            disabled={disabled || loading}
            style={style}
            {...restProps}>
            {renderIcon()}
            <span>{children}</span>
        </button>
    );
};

Button.defaultProps = defaultProps;

Button.Group = Group;

export default Button;
