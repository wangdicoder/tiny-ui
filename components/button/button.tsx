import React from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';

export type ButtonColor = 'primary' | 'blue' | 'red' | 'yellow' | 'green';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends BaseProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  color?: ButtonColor;
  loading?: boolean;
  disabled?: boolean;
  block?: boolean;
  size?: ButtonSize;
  round?: boolean;
  icon?: React.ReactNode;
  link?: boolean;
  children?: React.ReactNode;
}

const defaultProps = {
  prefixCls: 'ty-btn',
  size: 'md' as ButtonSize,
  loading: false,
} as Partial<ButtonProps>;

const Button: React.FC<ButtonProps> & { Group?: any } = (props: ButtonProps) => {
  const {
    color,
    size,
    block,
    icon,
    link,
    loading,
    disabled,
    onClick,
    round,
    children,
    className,
    prefixCls,
    style,
    ...restProps
  } = props;
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

export default Button;
