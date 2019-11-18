import React, { useCallback, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';
import Popup, { PlacementType } from '../popup';
import warning from '../_utils/warning';

export type TriggerType = 'hover' | 'focus' | 'click' | 'context-menu';

export interface PopoverProps extends BaseProps {
  title?: React.ReactNode;
  content?: React.ReactNode;
  placement?: PlacementType;
  trigger?: TriggerType;
  children: React.ReactElement;
}

let eventTarget: EventTarget | null = null;
const Popover = ({
  prefixCls = 'ty-popover',
  placement = 'top-center',
  trigger = 'hover',
  ...restProps
}: PopoverProps) => {
  const { title, content, className, children } = restProps;
  const [popupVisible, setPopupVisible] = useState(false);
  const cls = classNames(className, prefixCls);
  const [target, setTarget] = useState<HTMLElement | undefined>(undefined);
  const popupRef = useRef<HTMLDivElement | null>(null);

  const displayPopup = useCallback(() => {
    setPopupVisible(true);
  }, []);

  const hidePopup = useCallback(() => {
    setPopupVisible(false);
  }, []);

  const handlePopupMouseOver = (): void => {
    trigger === 'hover' && setPopupVisible(true);
  };

  const handlePopupMouseOut = (): void => {
    trigger === 'hover' && setPopupVisible(false);
  };

  const isInPopup = (): boolean => {
    const eventEl = eventTarget as HTMLElement;
    const flag = (popupRef.current as HTMLDivElement).contains(eventEl);
    eventTarget = null;
    return flag;
  };

  const handleClickOutside = useCallback(
    (e: Event): void => {
      eventTarget = e.target;
      if (isInPopup()) return;

      hidePopup();
      document.removeEventListener('click', handleClickOutside);
    },
    [popupVisible]
  );

  const handleClick = useCallback(
    (e: Event): void => {
      e.preventDefault();
      if (popupVisible) {
        hidePopup();
      } else {
        displayPopup();
        document.addEventListener('click', handleClickOutside);
        e.stopPropagation();
      }
    },
    [handleClickOutside]
  );

  useEffect(() => {
    if (!target) return undefined;

    if (trigger === 'hover') {
      target.addEventListener('mouseenter', displayPopup);
      target.addEventListener('mouseleave', hidePopup);
    } else if (trigger === 'click') {
      target.addEventListener('click', handleClick);
    } else if (trigger === 'context-menu') {
      target.addEventListener('contextmenu', handleClick);
    } else {
      target.addEventListener('focus', displayPopup);
      target.addEventListener('blur', hidePopup);
    }

    return () => {
      target.removeEventListener('mouseenter', displayPopup);
      target.removeEventListener('mouseleave', hidePopup);
      target.removeEventListener('click', handleClick);
      target.removeEventListener('contextmenu', handleClick);
      target.removeEventListener('focus', displayPopup);
      target.removeEventListener('blur', hidePopup);
    };
  }, [target, displayPopup, hidePopup, handleClick]);

  if (children) {
    return (
      <>
        {React.cloneElement(React.Children.only(children), {
          ref: (el: HTMLElement) => setTarget(el),
        })}
        <Popup
          target={target}
          show={popupVisible}
          placement={placement}
          onMouseOver={handlePopupMouseOver}
          onMouseOut={handlePopupMouseOut}>
          <div className={cls} ref={popupRef}>
            <div className={`${prefixCls}__title`}>{title}</div>
            <div className={`${prefixCls}__content`}>{content}</div>
          </div>
        </Popup>
      </>
    );
  }
  warning(false, 'Children is required.', true);
  return null;
};

export default Popover;
