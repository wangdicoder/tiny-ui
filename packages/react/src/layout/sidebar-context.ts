import React from 'react';

type Props = {
  addSidebar: () => void;
  removeSidebar: () => void;
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = (): void => {};

export const SidebarContext = React.createContext<Props>({
  addSidebar: noop,
  removeSidebar: noop,
});
