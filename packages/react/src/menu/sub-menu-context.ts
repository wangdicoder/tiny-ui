import React from 'react';

type Props = {
  level?: number;
  onMenuItemClick?: () => void;
};

export const SubMenuContext = React.createContext<Props>({});
