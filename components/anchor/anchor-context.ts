import React from 'react';

type Props = {
  activeId?: string;
};

export const AnchorContext = React.createContext<Props>({});
