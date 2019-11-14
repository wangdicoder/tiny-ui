import React from 'react';
import classnames from 'classnames';
import { AvatarProps } from './';

export type AvatarGroupProps = {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactElement<AvatarProps>;
} & typeof defaultProps;

const defaultProps = {
  prefixCls: 'ty-avatar-group',
};

const AvatarGroup = (props: AvatarGroupProps) => {
  const { prefixCls, className, style, children } = props;
  const cls = classnames(prefixCls, className);

  return (
    <span className={cls} style={style}>
      {React.Children.map(children, child => React.cloneElement(child, child.props))}
    </span>
  );
};

AvatarGroup.defaultProps = defaultProps;

export default AvatarGroup;
