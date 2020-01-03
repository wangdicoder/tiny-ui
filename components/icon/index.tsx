import React from 'react';
import classNames from 'classnames';

export interface IconTypes {
  name: string;
  color?: string;
  size?: string | number;
  style?: React.CSSProperties;
  spin?: boolean;
  className?: string;
  prefixCls?: string;
}

const Icon = (props: IconTypes) => {
  const { prefixCls = 'ty-icon', name, color, size, style, spin, className, ...otherProps } = props;
  const cls = classNames(prefixCls, className, `ty--${name}`, {
    [`${prefixCls}_spin`]: spin,
  });
  return <i className={cls} style={{ color, fontSize: size, ...style }} {...otherProps} />;
};

export default Icon;
