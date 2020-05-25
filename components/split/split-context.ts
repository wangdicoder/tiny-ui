import React from 'react';
import { DirectionType } from '../_utils/props';

type Props = {
  mode: DirectionType;
};

export const SplitContext = React.createContext<Props>({ mode: 'vertical' });
