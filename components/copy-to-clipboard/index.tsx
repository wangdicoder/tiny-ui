import React, { useContext } from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';

export interface CopyToClipboardProps
  extends BaseProps,
    React.PropsWithoutRef<JSX.IntrinsicElements['span']> {
  text: string;
  children?: React.ReactNode;
}

const copy = (value: string) => {
  const textArea = document.createElement('textarea');
  textArea.style.background = 'transparent';
  textArea.value = value;
  document.body.appendChild(textArea);
  textArea.select();
  try {
    document.execCommand('copy');
  } catch (err) {
    console.log('Oops, unable to copy');
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
