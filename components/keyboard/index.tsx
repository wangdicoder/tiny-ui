import React, { useContext } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { KeyboardProps } from './types';

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
