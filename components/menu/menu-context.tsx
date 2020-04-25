import React from 'react';
import { MenuMode } from './menu';

interface MenuContextInterface {
  index: string;
  mode: MenuMode;
  onSelect?: (selectedIndex: string) => void;
}

export const MenuContext = React.createContext<MenuContextInterface>({
  index: '0',
  mode: 'horizontal',
});
