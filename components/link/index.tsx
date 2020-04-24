import React from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';

export interface LinkProps extends BaseProps, React.PropsWithRef<JSX.IntrinsicElements['a']> {
  external?: boolean;
  disabled?: boolean;
  underline?: boolean;
  children?: React.ReactNode;
}

const Link = (props: LinkProps): React.ReactElement => {
  const {
    prefixCls = 'ty-link',
    disabled = false,
    external = true,
    underline = true,
    className,
    style,
    children,
    target,
    ...otherProps
  } = props;
  const cls = classNames(prefixCls, className, {
    [`${prefixCls}_disabled`]: disabled,
    [`${prefixCls}_no-underline`]: !underline,
  });

  if (disabled) {
    delete otherProps.href;
  }
  return (
    <a
      {...otherProps}
      target={target ? target : external ? '_blank' : '_self'}
      className={cls}
      style={style}
      aria-disabled={disabled}>
      <span>{children}</span>
    </a>
  );
};

export default Link;
