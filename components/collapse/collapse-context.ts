import React from 'react';

type Props = {
  activeKeys: string[];
  onItemClick?: (itemKey: string) => void;
};

export const CollapseContext = React.createContext<Props>({
  activeKeys: [],
});
