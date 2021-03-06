import React from 'react';
import { MenuMode } from './types';

type Props = {
  index: string;
  mode: MenuMode;
  inlineIndent: number;
  onSelect?: (selectedIndex: string) => void;
};

export const MenuContext = React.createContext<Props>({
  index: '0',
  inlineIndent: 20,
  mode: 'horizontal',
});
