import React from 'react';

type Props = {
  onMenuItemClick?: () => void;
};

export const SubMenuContext = React.createContext<Props>({});
