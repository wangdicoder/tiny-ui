import React from 'react';

type Props = {
  value?: string | string[];
  mode?: 'multiple' | 'tags';
  searchValue?: string;
  onSelect: (value: string) => void;
  prefixCls?: string;
};

export const SelectContext = React.createContext<Props>({
  value: '',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onSelect: () => {},
});
