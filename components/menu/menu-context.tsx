import React from 'react';
import { DirectionType } from '../_utils/props';

type Props = {
  index: string;
  mode: DirectionType;
  onSelect?: (selectedIndex: string) => void;
};

export const MenuContext = React.createContext<Props>({
  index: '0',
  mode: 'horizontal',
});
