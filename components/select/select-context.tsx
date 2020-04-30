import React from 'react';

type Props = {
  value?: string | string[];
  highlightVal?: string;
  onSelect: (value: string | string[]) => void;
};

export const SelectContext = React.createContext<Props>({ value: '', onSelect: () => {} });
