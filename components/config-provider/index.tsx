import React from 'react';
import { ConfigContext } from './config-context';
import { ConfigProviderProps } from './types';

const ConfigProvider = (props: ConfigProviderProps): JSX.Element => {
  const { children, ...otherProps } = props;
  return <ConfigContext.Provider value={{ ...otherProps }}>{children}</ConfigContext.Provider>;
};

ConfigProvider.displayName = 'ConfigProvider';

export default ConfigProvider;
