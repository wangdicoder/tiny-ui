import React from 'react';
import { SplitMode } from './split';

type Props = {
  mode?: SplitMode;
};

export const SplitContext = React.createContext<Props>({});
