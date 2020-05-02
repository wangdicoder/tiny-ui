import React from 'react';
import { SizeType } from '../_utils/props';

export interface ConfigContextProps {
  prefixCls?: string;
  componentSize?: SizeType;
}

export default React.createContext<ConfigContextProps>({
  prefixCls: 'ty',
  componentSize: 'md',
});
