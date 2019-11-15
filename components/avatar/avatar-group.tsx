import React from 'react';
import classnames from 'classnames';
import { AvatarProps } from './avatar';
import { BaseProps } from '../_utils/props';

export interface AvatarGroupProps extends BaseProps {
  children: React.ReactElement<AvatarProps>;
}

const AvatarGroup = ({ prefixCls = 'ty-avatar-group', ...restProps }: AvatarGroupProps) => {
  const { className, style, children } = restProps;
  const cls = classnames(prefixCls, className);

  return (
    <span className={cls} style={style}>
      {React.Children.map(children, child => React.cloneElement(child, child.props))}
    </span>
  );
};

export default AvatarGroup;
