import React from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';

export interface KeyboardProps extends BaseProps {
  children?: React.ReactNode;
}

const Keyboard = ({ prefixCls = 'ty-kbd', ...restProps }: KeyboardProps) => {
  const { className, style, children } = restProps;
  const cls = classNames(prefixCls, className);

  return (
    <kbd className={cls} style={style}>
      {children}
    </kbd>
  );
};

export default Keyboard;
