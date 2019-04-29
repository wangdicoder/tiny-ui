import React from 'react';
import IntlContext from './intl-context';

export type IntlProviderProps = {
    locale: string,
    children: React.ReactNode,
};

const IntlProvider = (props: IntlProviderProps) => {
    const { locale, children } = props;
    return <IntlContext.Provider value={locale}>{children}</IntlContext.Provider>;
};

export default IntlProvider;
