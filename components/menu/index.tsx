import Menu from './menu';
import MenuItem from './menu-item';
import SubMenu from './sub-menu';
import MenuItemGroup from './menu-item-group';

type IMenu = typeof Menu & {
  Item: typeof MenuItem;
  SubMenu: typeof SubMenu;
  ItemGroup: typeof MenuItemGroup;
};

const DefaultMenu = Menu as IMenu;
DefaultMenu.Item = MenuItem;
DefaultMenu.SubMenu = SubMenu;
DefaultMenu.ItemGroup = MenuItemGroup;

export default DefaultMenu;
