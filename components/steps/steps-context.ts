import React from 'react';
import { StepsStatus } from './steps';
import { DirectionType } from '../_utils/props';

type Props = {
  current: number;
  labelPlacement: DirectionType;
  status: StepsStatus;
  clickable: boolean;
  onClick?: (current: number) => void;
};

export const StepsContext = React.createContext<Props>({
  current: 0,
  labelPlacement: 'vertical',
  status: 'process',
  clickable: false,
});
