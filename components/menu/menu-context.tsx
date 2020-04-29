import React from 'react';
import { MenuMode } from './menu';

type Props = {
  index: string;
  mode: MenuMode;
  onSelect?: (selectedIndex: string) => void;
};

export const MenuContext = React.createContext<Props>({
  index: '0',
  mode: 'horizontal',
});
