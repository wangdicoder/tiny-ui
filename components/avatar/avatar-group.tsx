import React from 'react';
import classnames from 'classnames';
import { AvatarProps } from './avatar';
import { BaseProps } from '../_utils/props';

export interface AvatarGroupProps extends BaseProps {
  children: React.ReactElement<AvatarProps>;
}

const defaultProps = {
  prefixCls: 'ty-avatar-group',
} as Partial<AvatarGroupProps>;

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
