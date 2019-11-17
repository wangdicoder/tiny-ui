import React from 'react';
import classNames from 'classnames';
import { BaseProps, Size, Color } from '../_utils/props';

export { Size, Color };

export interface ButtonProps extends BaseProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  color?: Color;
  loading?: boolean;
  disabled?: boolean;
  block?: boolean;
  size?: Size;
  round?: boolean;
  icon?: React.ReactNode;
  link?: boolean;
  children?: React.ReactNode;
}

export interface CompoundedComponent
  extends React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>> {
  Group?: any;
}

const Button: CompoundedComponent = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      prefixCls = 'ty-btn',
      size = 'md',
      loading = false,
      color,
      block,
      icon,
      link,
      disabled,
      onClick,
      round,
      children,
      className,
      style,
      ...otherProps
    }: ButtonProps,
    ref
  ) => {
    const cls = classNames(prefixCls, className, {
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
        return <span className={`${prefixCls}__loader`} />;
      } else {
        return <span>{icon}</span>;
      }
    };

    return (
      <button
        ref={ref}
        onClick={onClick}
        className={cls}
        disabled={disabled || loading}
        style={style}
        {...otherProps}>
        {renderIcon()}
        <span>{children}</span>
      </button>
    );
  }
);

export default Button;
