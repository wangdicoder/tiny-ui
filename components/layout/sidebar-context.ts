import React from 'react';

type Props = {
  addSidebar: () => void;
  removeSidebar: () => void;
};

export const SidebarContext = React.createContext<Props>({
  addSidebar: () => {},
  removeSidebar: () => {},
});
