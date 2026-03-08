import React, { useContext } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { CopyToClipboardProps } from './types';

const copy = async (value: string) => {
  if (navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      fallbackCopy(value);
    }
  } else {
    fallbackCopy(value);
  }
};

const fallbackCopy = (value: string) => {
  const textArea = document.createElement('textarea');
  textArea.style.position = 'fixed';
  textArea.style.opacity = '0';
  textArea.value = value;
  document.body.appendChild(textArea);
  textArea.select();
  try {
    document.execCommand('copy');
  } catch {
    // copy failed silently
  }
  document.body.removeChild(textArea);
};

const CopyToClipboard = (props: CopyToClipboardProps): React.ReactElement => {
  const { prefixCls: customisedCls, text, className, children, onClick, ...otherProps } = props;
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('copy', configContext.prefixCls, customisedCls);
  const cls = classNames(prefixCls, className);

  const btnOnClick = (e: React.MouseEvent<HTMLSpanElement>): void => {
    copy(text);
    onClick && onClick(e);
  };

  return (
    <span {...otherProps} className={cls} onClick={btnOnClick}>
      {children}
    </span>
  );
};

CopyToClipboard.displayName = 'CopyToClipboard';

export default CopyToClipboard;
