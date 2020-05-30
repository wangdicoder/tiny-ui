import React from 'react';
import { SizeType } from '../_utils/props';
import { SpaceSize } from '../space/types';

export interface ConfigContextProps {
  prefixCls?: string;
  componentSize?: SizeType;
  shimmer?: boolean;
  space?: SpaceSize;
}

export const ConfigContext = React.createContext<ConfigContextProps>({
  prefixCls: 'ty',
  componentSize: 'md',
  shimmer: false,
  space: 'sm',
});
