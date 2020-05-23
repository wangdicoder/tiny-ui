import React from 'react';

type Props = {
  value?: number | string;
  name?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const RadioGroupContext = React.createContext<Props>({});
