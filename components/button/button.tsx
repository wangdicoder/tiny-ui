import React from 'react';
import classNames from 'classnames';
import { BaseProps, Size } from '../_utils/props';

export { Size };
export type ButtonColor = 'primary' | 'default' | 'blue' | 'red' | 'yellow' | 'green';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'>, BaseProps {
  color?: ButtonColor;
  loading?: boolean;
  disabled?: boolean;
  block?: boolean;
  size?: Size;
  round?: boolean;
  icon?: React.ReactNode;
  link?: boolean;
  children?: React.ReactNode;
}

interface ButtonComponent
  extends React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>> {
  Group?: any;
}

const Button: ButtonComponent = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      prefixCls = 'ty-btn',
      size = 'md',
      color = 'default',
      loading = false,
      disabled = false,
      block = false,
      icon,
      link,
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

    const renderIcon = (): React.ReactElement => {
      if (loading) {
        return <span className={`${prefixCls}__loader`} />;
      } else {
        return <span>{icon}</span>;
      }
    };

    return (
      <button
        ref={ref}
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
