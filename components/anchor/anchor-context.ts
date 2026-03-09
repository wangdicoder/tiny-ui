import React from 'react';

type Props = {
  activeId?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>, anchorName: string) => void;
  registerLink?: (href: string) => void;
  unregisterLink?: (href: string) => void;
};

export const AnchorContext = React.createContext<Props>({});
