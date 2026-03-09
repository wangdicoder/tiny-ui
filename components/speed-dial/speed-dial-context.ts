import { createContext } from 'react';
import { SpeedDialDirection } from './types';

export interface SpeedDialContextProps {
  direction: SpeedDialDirection;
}

export const SpeedDialContext = createContext<SpeedDialContextProps>({
  direction: 'up',
});
