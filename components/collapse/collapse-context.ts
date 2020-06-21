import React from 'react';

type Props = {
  activeKeys: string[];
};

export const CollapseContext = React.createContext<Props>({
  activeKeys: [],
});
