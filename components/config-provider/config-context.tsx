import React from 'react';
import { SizeType } from '../_utils/props';
import { SpaceSize } from '../space/types';

export type ThemeMode = 'light' | 'dark' | 'system';

export interface ConfigContextProps {
  prefixCls?: string;
  componentSize?: SizeType;
  shimmer?: boolean;
  space?: SpaceSize;
  theme?: ThemeMode;
}

export const ConfigContext = React.createContext<ConfigContextProps>({
  prefixCls: 'ty',
  componentSize: 'md',
  shimmer: false,
  space: 'sm',
});
