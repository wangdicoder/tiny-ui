import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
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
  const [popupVisible, setPopupVisible] = useState<boolean>(
    'visible' in props ? (props.visible as boolean) : false
  );
  const delayDisplayPopupTimer = useRef<number | undefined>(undefined);
  const delayHidePopupTimer = useRef<number | undefined>(undefined);

  const displayPopup = useCallback(() => {
    !('visible' in props) && setPopupVisible(true);
    onVisibleChange && onVisibleChange(true);
  }, [props, onVisibleChange]);

  const hidePopup = useCallback(() => {
    !('visible' in props) && setPopupVisible(false);
    onVisibleChange && onVisibleChange(false);
  }, [props, onVisibleChange]);

  const delayHidePopup = useCallback((): void => {
    delayHidePopupTimer.current = window.setTimeout(() => {
      hidePopup();
    }, 100);
  }, [hidePopup]);

  const renderOverlay = (): React.ReactNode => {
    if (!overlay) {
      return null;
    }

    const overlayProps: Partial<MenuProps> = {
      overlayClassName: cls,
      mode: 'vertical',
      theme: 'light',
      onMouseEnter: () => {
        if (trigger === 'hover') {
          displayPopup();
          window.clearTimeout(delayHidePopupTimer.current);
        }
      },
      onMouseLeave: () => {
        if (trigger === 'hover') {
          delayHidePopup();
          window.clearTimeout(delayDisplayPopupTimer.current);
        }
      },
      onSelect: (selectedIndex) => {
        const { onSelect } = overlay.props;
        onSelect && onSelect(selectedIndex);
        hidePopup();
      },
    };
    return React.cloneElement(overlay, overlayProps);
  };

  const handleTargetOnMouseEnter = () => {
    if (trigger === 'hover') {
      displayPopup();
      window.clearTimeout(delayHidePopupTimer.current);
    }
  };

  const handleTargetOnMouseLeave = () => {
    if (trigger === 'hover') {
      delayHidePopup();
      window.clearTimeout(delayDisplayPopupTimer.current);
    }
  };

  const handleTargetOnClick = () => {
    if (trigger === 'click') {
      displayPopup();
    }
  };

  useEffect(() => {
    'visible' in props && setPopupVisible(props.visible as boolean);
  }, [props]);

  const childrenProps = {
    onMouseEnter: handleTargetOnMouseEnter,
    onMouseLeave: handleTargetOnMouseLeave,
    onClick: handleTargetOnClick,
  };

  React.Children.only(children);
  return (
    <Popup
      {...otherProps}
      biZoom={false}
      arrow={false}
      disabled={disabled}
      placement={placement}
      flip={!('placement' in props)}
      trigger="manual"
      className={cls}
      visible={popupVisible}
      content={renderOverlay()}>
      {React.cloneElement(children, childrenProps)}
    </Popup>
  );
};

Dropdown.displayName = 'Dropdown';

export default Dropdown;
