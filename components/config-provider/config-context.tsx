import React from 'react';
import { SizeType } from '../_utils/props';

export interface ConfigContextProps {
  prefixCls?: string;
  componentSize?: SizeType;
  shimmer?: boolean;
}

export const ConfigContext = React.createContext<ConfigContextProps>({
  prefixCls: 'ty',
  componentSize: 'md',
  shimmer: false,
});
