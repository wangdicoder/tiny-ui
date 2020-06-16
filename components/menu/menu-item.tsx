import React, { useContext } from 'react';
import classNames from 'classnames';
import { MenuContext } from './menu-context';
import { SubMenuContext } from './sub-menu-context';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { MenuItemProps } from './types';

const MenuItem = (props: MenuItemProps): JSX.Element => {
  const {
    disabled = false,
    index,
    className,
    style,
    children,
    onClick,
    prefixCls: customisedCls,
    ...otherProps
  } = props;
  const menuContext = useContext(MenuContext);
  const subMenuContext = useContext(SubMenuContext);
  const { inlineIndent, mode } = menuContext;
  const { level = 1, onMenuItemClick } = subMenuContext;
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('menu-item', configContext.prefixCls, customisedCls);
  const cls = classNames(prefixCls, className, {
    [`${prefixCls}_disabled`]: disabled,
    [`${prefixCls}_active`]: menuContext.index === index,
  });

  const onItemClick = (e: React.MouseEvent): void => {
    if (disabled) {
      return;
    }

    onClick && onClick(e);
    onMenuItemClick && onMenuItemClick();
    if (menuContext.onSelect && typeof index === 'string') {
      menuContext.onSelect(index);
    }
  };

  return (
    <li
      {...otherProps}
      key={index}
      role="menuitem"
      className={cls}
      style={{ paddingLeft: mode === 'inline' ? level * inlineIndent : undefined, ...style }}
      onClick={onItemClick}>
      {children}
    </li>
  );
};

MenuItem.displayName = 'MenuItem';

export default MenuItem;
