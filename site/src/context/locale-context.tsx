import React, { createContext, useContext, useState, useCallback } from 'react';
import { Locale, en_US, zh_CN } from '../../../components';
import { SiteLocale, siteEnUS, siteZhCN } from '../locale';

type LocaleContextType = {
  locale: Locale;
  siteLocale: SiteLocale;
  toggle: () => void;
};

const STORAGE_KEY = 'tiny-ui-locale';

function isZh(): boolean {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'zh_CN';
  } catch {
    return false;
  }
}

const LocaleContext = createContext<LocaleContextType>({
  locale: en_US,
  siteLocale: siteEnUS,
  toggle: () => {},
});

export const useLocaleContext = (): LocaleContextType =>
  useContext(LocaleContext);

export const LocaleProvider = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement => {
  const [zh, setZh] = useState(isZh);

  const toggle = useCallback(() => {
    setZh((prev) => {
      const next = !prev;
      try { localStorage.setItem(STORAGE_KEY, next ? 'zh_CN' : 'en_US'); } catch {}
      return next;
    });
  }, []);

  const locale = zh ? zh_CN : en_US;
  const siteLocale = zh ? siteZhCN : siteEnUS;

  return (
    <LocaleContext.Provider value={{ locale, siteLocale, toggle }}>
      {children}
    </LocaleContext.Provider>
  );
};
