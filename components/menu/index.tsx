import React from 'react';
import Menu, { MenuProps } from './menu';
import MenuItem, { MenuItemProps } from './menu-item';
import SubMenu, { SubMenuProps } from './sub-menu';
import MenuItemGroup, { MenuItemGroupProps } from './menu-item-group';

export { MenuProps, MenuItemProps, SubMenuProps, MenuItemGroupProps };

type IMenu = React.FC<MenuProps> & {
  Item: typeof MenuItem;
  SubMenu: typeof SubMenu;
  ItemGroup: typeof MenuItemGroup;
};

const DefaultMenu = Menu as IMenu;
DefaultMenu.Item = MenuItem;
DefaultMenu.SubMenu = SubMenu;
DefaultMenu.ItemGroup = MenuItemGroup;

export default DefaultMenu;
