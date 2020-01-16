import React from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';

export interface KeyboardProps extends React.PropsWithRef<BaseProps> {
  children?: React.ReactNode;
}

const Keyboard = React.forwardRef<HTMLElement, KeyboardProps>((props: KeyboardProps, ref) => {
  const { prefixCls = 'ty-kbd', className, style, children } = props;
  const cls = classNames(prefixCls, className);

  return (
    <kbd ref={ref} className={cls} style={style}>
      {children}
    </kbd>
  );
});

Keyboard.displayName = 'Keyboard';
export default Keyboard;
