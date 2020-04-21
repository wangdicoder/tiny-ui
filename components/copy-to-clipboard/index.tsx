import React from 'react';
import classNames from 'classnames';
import copy from 'copy-to-clipboard';
import { BaseProps } from '../_utils/props';

export interface CopyToClipboardProps
  extends BaseProps,
    React.PropsWithoutRef<JSX.IntrinsicElements['span']> {
  text: string;
  children?: React.ReactNode;
}

const CopyToClipboard = (props: CopyToClipboardProps): React.ReactElement => {
  const { prefixCls = 'ty-copy', text, className, style, children, onClick, ...otherProps } = props;
  const cls = classNames(prefixCls, className);

  const btnOnClick = (e: React.MouseEvent<HTMLSpanElement>): void => {
    copy(text);
    onClick && onClick(e);
  };

  return (
    <span {...otherProps} className={cls} style={style} onClick={btnOnClick}>
      {children}
    </span>
  );
};

export default CopyToClipboard;
