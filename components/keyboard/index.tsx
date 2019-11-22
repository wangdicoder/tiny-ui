import React from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';

export interface KeyboardProps extends React.PropsWithRef<BaseProps> {
  children?: React.ReactNode;
}

const Keyboard = React.forwardRef<HTMLElement, KeyboardProps>(
  ({ prefixCls = 'ty-kbd', className, style, children }: KeyboardProps, ref) => {
    const cls = classNames(prefixCls, className);

    return (
      <kbd ref={ref} className={cls} style={style}>
        {children}
      </kbd>
    );
  }
);

export default Keyboard;
