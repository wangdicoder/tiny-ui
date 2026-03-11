import React from 'react';
import { ConfigContextProps } from './config-context';

export interface ConfigProviderProps extends ConfigContextProps {
  children: React.ReactNode;
}
