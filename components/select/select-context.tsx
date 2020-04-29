import React from 'react';

type Props = {
  value?: string | string[];
  highlightVal?: string;
};

export const SelectContext = React.createContext<Props>({ value: '' });
