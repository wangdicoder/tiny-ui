import React from 'react';

type Props = {
  value?: string[];
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const CheckboxGroupContext = React.createContext<Props>({});
