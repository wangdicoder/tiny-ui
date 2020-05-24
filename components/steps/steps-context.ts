import React from 'react';
import { StepsDirection, StepsStatus } from './steps';

type Props = {
  current: number;
  labelPlacement: StepsDirection;
  status: StepsStatus;
  clickable: boolean;
  onClick?: (current: number) => void;
};

export const StepsContext = React.createContext<Props>({
  current: 0,
  labelPlacement: 'horizontal',
  status: 'process',
  clickable: false,
});
