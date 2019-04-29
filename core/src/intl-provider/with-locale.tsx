import React, { useContext, ComponentType } from 'react';
import IntlContext from './intl-context';

export function withLocale<T>(WrappedComponent: ComponentType<T>) {
    return (props: T) => {
        const locale = useContext(IntlContext);
        return <WrappedComponent {...props} locale={locale}/>;
    };
}
