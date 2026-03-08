import React, { createContext, useContext, useState, useCallback } from 'react';

type SidebarToggleContextType = {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
};

const SidebarToggleContext = createContext<SidebarToggleContextType>({
  isOpen: false,
  toggle: () => {},
  close: () => {},
});

export const useSidebarToggle = (): SidebarToggleContextType =>
  useContext(SidebarToggleContext);

export const SidebarToggleProvider = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <SidebarToggleContext.Provider value={{ isOpen, toggle, close }}>
      {children}
    </SidebarToggleContext.Provider>
  );
};
