import { useContext } from 'react';
import { Locale } from '../locale/types';
import { ConfigContext } from '../config-provider/config-context';
import IntlContext from '../intl-provider/intl-context';

export function useLocale(): Locale {
  const config = useContext(ConfigContext);
  const intl = useContext(IntlContext);
  return config.locale ?? intl;
}
