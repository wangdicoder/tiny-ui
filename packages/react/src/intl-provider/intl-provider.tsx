import React from 'react';
import { Locale } from '../locale/types';
import IntlContext from './intl-context';

export interface IntlProviderProps {
  locale: Locale;
  children: React.ReactNode;
}

const IntlProvider = (props: IntlProviderProps): React.ReactElement => {
  const { locale, children } = props;
  return <IntlContext.Provider value={locale}>{children}</IntlContext.Provider>;
};

export default IntlProvider;
