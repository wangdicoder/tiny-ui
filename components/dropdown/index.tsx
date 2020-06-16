import React, { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { DropdownProps } from './types';
import { MenuProps } from '../menu/types';
import Popup from '../popup';

const Dropdown = (props: DropdownProps): JSX.Element => {
  const {
    trigger = 'hover',
    placement = 'bottom-start',
    disabled = false,
    onVisibleChange,
    overlay,
    className,
    children,
    prefixCls: customisedCls,
    ...otherProps
  } = props;
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('dropdown', configContext.prefixCls, customisedCls);
  const cls = classNames(prefixCls, className);
  const [visible, setVisible] = useState<boolean>(
    'visible' in props ? (props.visible as boolean) : false
  );

  const onMenuItemSelect = () => {
    !('visible' in props) && setVisible(false);
  };

  const renderOverlay = (): React.ReactNode => {
    if (!overlay) {
      return null;
    }

    const overlayProps: Partial<MenuProps> = {
      mode: 'vertical',
      theme: 'light',
      onSelect: onMenuItemSelect,
    };
    return React.cloneElement(overlay, overlayProps);
  };

  useEffect(() => {
    'visible' in props && setVisible(props.visible as boolean);
  }, [props]);

  return (
    <Popup
      {...otherProps}
      arrow={false}
      disabled={disabled}
      placement={placement}
      trigger={trigger}
      className={cls}
      visible={visible}
      onVisibleChange={onVisibleChange}
      content={renderOverlay()}>
      {children}
    </Popup>
  );
};

Dropdown.displayName = 'Dropdown';

export default Dropdown;
