import { useEffect } from 'react';
import { ConfigContext } from './config-context';
import { ConfigProviderProps } from './types';

const ConfigProvider = (props: ConfigProviderProps): JSX.Element => {
  const { children, theme, ...otherProps } = props;

  useEffect(() => {
    if (!theme) return;
    const html = document.documentElement;
    if (theme === 'system') {
      html.removeAttribute('data-theme');
    } else {
      html.setAttribute('data-theme', theme);
    }
  }, [theme]);

  return (
    <ConfigContext.Provider value={{ theme, ...otherProps }}>
      {children}
    </ConfigContext.Provider>
  );
};

ConfigProvider.displayName = 'ConfigProvider';

export default ConfigProvider;
