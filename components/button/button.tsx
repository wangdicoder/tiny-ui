import React from 'react';
import classNames from 'classnames';
import { BaseProps, SizeType } from '../_utils/props';

export type ButtonType =
  | 'default'
  | 'primary'
  | 'outline'
  | 'ghost'
  | 'link'
  | 'info'
  | 'error'
  | 'warning'
  | 'success';

export interface ButtonProps
  extends BaseProps,
    React.PropsWithRef<JSX.IntrinsicElements['button']> {
  btnType?: ButtonType;
  loading?: boolean;
  disabled?: boolean;
  block?: boolean;
  size?: SizeType;
  round?: boolean;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props: ButtonProps, ref) => {
  const {
    prefixCls = 'ty-btn',
    size = 'md',
    btnType = 'default',
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
      {...otherProps}
      ref={ref}
      role="button"
      className={cls}
      disabled={disabled || loading}
      style={style}>
      {renderIcon()}
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
