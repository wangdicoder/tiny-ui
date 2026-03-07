import { useContext, ComponentType } from 'react';
import IntlContext from './intl-context';

export function withLocale<T>(WrappedComponent: ComponentType<T>) {
  const WithLocale = (props: T) => {
    const locale = useContext(IntlContext);
    return <WrappedComponent {...props} locale={locale} />;
  };
  WithLocale.displayName = `withLocale(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;
  return WithLocale;
}
