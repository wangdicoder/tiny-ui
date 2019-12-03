import React from 'react';
import classNames from 'classnames';
import { AvatarProps } from './avatar';
import { BaseProps } from '../_utils/props';

export interface AvatarGroupProps extends BaseProps {
  children: React.ReactElement<AvatarProps>;
}

const AvatarGroup = (props: AvatarGroupProps) => {
  const { prefixCls = 'ty-avatar-group', className, style, children } = props;
  const cls = classNames(prefixCls, className);

  return (
    <span className={cls} style={style}>
      {React.Children.map(children, child => React.cloneElement(child, child.props))}
    </span>
  );
};

export default AvatarGroup;
