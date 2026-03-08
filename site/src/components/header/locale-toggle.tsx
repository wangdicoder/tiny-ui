import React from 'react';
import { useLocaleContext } from '../../context/locale-context';

export const LocaleToggle = (): React.ReactElement => {
  const { locale, toggle } = useLocaleContext();
  const isZh = locale.locale === 'zh_CN';

  return (
    <button
      className="header__locale-toggle"
      onClick={toggle}
      aria-label={isZh ? 'Switch to English' : '切换到中文'}
      title={isZh ? 'Switch to English' : '切换到中文'}>
      {isZh ? 'EN' : '中文'}
    </button>
  );
};
