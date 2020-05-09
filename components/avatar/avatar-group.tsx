import React, { useContext } from 'react';
import classNames from 'classnames';
import { AvatarProps } from './avatar';
import { BaseProps } from '../_utils/props';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';

export interface AvatarGroupProps
  extends BaseProps,
    React.PropsWithoutRef<JSX.IntrinsicElements['span']> {
  children: React.ReactElement<AvatarProps>;
}

const AvatarGroup = (props: AvatarGroupProps): JSX.Element => {
  const { className, style, children, prefixCls: customisedCls, ...otherProps } = props;
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('avatar-group', configContext.prefixCls, customisedCls);
  const cls = classNames(prefixCls, className);

  return (
    <span {...otherProps} className={cls} style={style}>
      {React.Children.map(children, (child) => React.cloneElement(child, child.props))}
    </span>
  );
};

AvatarGroup.displayName = 'AvatarGroup';

export default AvatarGroup;
