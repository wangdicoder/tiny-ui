import React from 'react';
import classNames from 'classnames';
import { BaseProps, SizeType } from '../_utils/props';

export type ButtonColor = 'primary' | 'default' | 'info' | 'error' | 'warning' | 'success';
export type ButtonType = 'solid' | 'outline' | 'ghost' | 'link';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'>, BaseProps {
  color?: ButtonColor;
  btnType?: ButtonType;
  loading?: boolean;
  disabled?: boolean;
  block?: boolean;
  size?: SizeType;
  round?: boolean;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

interface ButtonComponent
  extends React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>> {
  Group?: any;
}

const Button: ButtonComponent = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props: ButtonProps, ref) => {
    const {
      prefixCls = 'ty-btn',
      size = 'md',
      color = 'default',
      btnType = 'solid',
      loading = false,
      disabled = false,
      block = false,
      icon,
      round,
      children,
      className,
      style,
      ...otherProps
    } = props;
    const cls = classNames(prefixCls, className, {
      [`${prefixCls}_${color}`]: color,
      [`${prefixCls}_${btnType}`]: btnType,
      [`${prefixCls}_${size}`]: size,
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
        role="button"
        className={cls}
        disabled={disabled || loading}
        style={style}
        {...otherProps}>
        {renderIcon()}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
