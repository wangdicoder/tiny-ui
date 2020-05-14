import React from 'react';
import { ConfigContext, ConfigContextProps } from './config-context';

export interface ConfigProviderProps extends ConfigContextProps {
  children: React.ReactNode;
}

const ConfigProvider = (props: ConfigProviderProps): JSX.Element => {
  const { children, ...otherProps } = props;
  return <ConfigContext.Provider value={{ ...otherProps }}>{children}</ConfigContext.Provider>;
};

ConfigProvider.displayName = 'ConfigProvider';

export default ConfigProvider;
