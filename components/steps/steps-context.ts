import React from 'react';
import { StepsDirection } from './steps';

type Props = {
  current: number;
  labelPlacement: StepsDirection;
};

export const StepsContext = React.createContext<Props>({
  current: 0,
  labelPlacement: 'horizontal',
});
