import React, { useContext } from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';

export interface KeyboardProps extends BaseProps, React.PropsWithRef<JSX.IntrinsicElements['kbd']> {
  children?: React.ReactNode;
}

const Keyboard = React.forwardRef<HTMLElement, KeyboardProps>((props: KeyboardProps, ref) => {
  const { prefixCls: customisedCls, className, children, ...otherProps } = props;
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('kbd', configContext.prefixCls, customisedCls);
  const cls = classNames(prefixCls, className);

  return (
    <kbd {...otherProps} ref={ref} className={cls}>
      {children}
    </kbd>
  );
});

Keyboard.displayName = 'Keyboard';

export default Keyboard;
