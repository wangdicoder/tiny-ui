import React, { useContext } from 'react';
import classNames from 'classnames';
import { MenuContext } from './menu-context';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { MenuItemProps } from './types';

const MenuItem = (props: MenuItemProps): React.ReactElement => {
  const {
    disabled = false,
    index,
    className,
    style,
    children,
    prefixCls: customisedCls,
    ...otherProps
  } = props;
  const context = useContext(MenuContext);
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('menu-item', configContext.prefixCls, customisedCls);
  const cls = classNames(prefixCls, className, {
    [`${prefixCls}_disabled`]: disabled,
    [`${prefixCls}_active`]: context.index === index,
  });

  const onClick = (): void => {
    if (context.onSelect && !disabled && typeof index === 'string') {
      context.onSelect(index);
    }
  };

  return (
    <li {...otherProps} key={index} role="menuitem" className={cls} style={style} onClick={onClick}>
      {children}
    </li>
  );
};

MenuItem.displayName = 'MenuItem';

export default MenuItem;
