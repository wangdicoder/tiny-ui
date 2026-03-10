import { useEffect } from 'react';
import { ConfigContext } from './config-context';
import { ConfigProviderProps } from './types';
import IntlProvider from '../intl-provider';

const ConfigProvider = (props: ConfigProviderProps): JSX.Element => {
  const { children, theme, locale, ...otherProps } = props;

  useEffect(() => {
    if (!theme) return;
    const html = document.documentElement;
    if (theme === 'system') {
      html.removeAttribute('data-theme');
    } else {
      html.setAttribute('data-theme', theme);
    }
  }, [theme]);

  const content = locale ? (
    <IntlProvider locale={locale}>{children}</IntlProvider>
  ) : (
    children
  );

  return (
    <ConfigContext.Provider value={{ theme, locale, ...otherProps }}>
      {content}
    </ConfigContext.Provider>
  );
};

ConfigProvider.displayName = 'ConfigProvider';

export default ConfigProvider;
