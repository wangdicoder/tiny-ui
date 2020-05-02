import React from 'react';
import ConfigContext, { ConfigContextProps } from './config-context';

export interface ConfigProviderProps extends ConfigContextProps {
  children: React.ReactNode;
}

const ConfigProvider = (props: ConfigProviderProps): React.ReactElement => {
  const { children, ...otherProps } = props;
  return <ConfigContext.Provider value={{ ...otherProps }}>{children}</ConfigContext.Provider>;
};

const ConfigConsumer = ConfigContext.Consumer;

export default { ConfigProvider, ConfigConsumer };
