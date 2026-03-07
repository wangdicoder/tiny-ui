import React from 'react';

type Props = {
  value?: string | string[];
  highlightVal?: string;
  onSelect: (value: string | string[]) => void;
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const SelectContext = React.createContext<Props>({ value: '', onSelect: () => {} });
