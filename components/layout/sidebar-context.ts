import React from 'react';

const SidebarContext = React.createContext({
  addSidebar: () => {},
  removeSidebar: () => {},
});

export default SidebarContext;
