import React, { useContext } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { DropdownProps } from './types';
import Popup from '../popup';

const Dropdown = (props: DropdownProps): JSX.Element => {
  const {
    trigger = 'hover',
    placement = 'bottom-start',
    overlay,
    className,
    children,
    prefixCls: customisedCls,
    ...otherProps
  } = props;
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('dropdown', configContext.prefixCls, customisedCls);
  const cls = classNames(prefixCls, className);

  return (
    <Popup
      {...otherProps}
      arrow={false}
      placement={placement}
      trigger={trigger}
      className={cls}
      content={overlay}>
      {children}
    </Popup>
  );
};

Dropdown.displayName = 'Dropdown';

export default Dropdown;
