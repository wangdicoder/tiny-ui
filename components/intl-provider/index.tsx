import React from 'react';
import IntlContext from './intl-context';

export interface IntlProviderProps {
  locale: string;
  children: React.ReactNode;
}

const IntlProvider = (props: IntlProviderProps): React.ReactElement => {
  const { locale, children } = props;
  return <IntlContext.Provider value={locale}>{children}</IntlContext.Provider>;
};

export default IntlProvider;
