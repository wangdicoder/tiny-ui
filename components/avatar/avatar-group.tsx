import React from 'react';
import classNames from 'classnames';
import { AvatarProps } from './avatar';
import { BaseProps } from '../_utils/props';

export interface AvatarGroupProps
  extends BaseProps,
    React.PropsWithoutRef<JSX.IntrinsicElements['span']> {
  children: React.ReactElement<AvatarProps>;
}

const AvatarGroup = (props: AvatarGroupProps): React.ReactElement => {
  const { prefixCls = 'ty-avatar-group', className, style, children, ...otherProps } = props;
  const cls = classNames(prefixCls, className);

  return (
    <span {...otherProps} className={cls} style={style}>
      {React.Children.map(children, child => React.cloneElement(child, child.props))}
    </span>
  );
};

AvatarGroup.displayName = 'AvatarGroup';

export default AvatarGroup;
