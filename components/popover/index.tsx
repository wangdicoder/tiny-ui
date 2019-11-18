import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';
import Popup, { PlacementType } from '../popup';
import warning from '../_utils/warning';

export type TriggerType = 'hover' | 'focus' | 'click' | 'context-menu';

export interface PopoverProps extends BaseProps {
  title?: string;
  content?: string;
  placement?: PlacementType;
  trigger?: TriggerType;
  children: React.ReactElement;
}

const Popover = ({
  prefixCls = 'ty-popover',
  placement = 'top-center',
  trigger = 'hover',
  ...restProps
}: PopoverProps) => {
  const { title, content, className, children } = restProps;
  const [showPopup, setShowPopup] = useState(false);
  const cls = classNames(className, prefixCls);
  const [target, setTarget] = useState<HTMLElement | undefined>(undefined);
  const popupRef = useRef<HTMLDivElement | null>(null);

  const handlePopupMouseOver = () => {
    trigger === 'hover' && setShowPopup(true);
  };

  const handlePopupMouseOut = () => {
    trigger === 'hover' && setShowPopup(false);
  };

  const handleClickOutside = (e: Event): void => {
    if (
      (popupRef.current && !popupRef.current.contains(e.target as HTMLElement)) ||
      (showPopup && target && !target.contains(e.target as HTMLElement))
    ) {
      setShowPopup(false);
      document.removeEventListener('click', handleClickOutside);
    }
  };

  const handleClick = (e: Event): void => {
    e.preventDefault();
    if (showPopup) {
      setShowPopup(false);
      document.removeEventListener('click', handleClickOutside);
    } else {
      setShowPopup(true);
      document.addEventListener('click', handleClickOutside);
    }
  };

  useEffect(() => {
    if (!target) return undefined;

    if (trigger === 'hover') {
      target.addEventListener('mouseenter', () => {
        setShowPopup(true);
      });
      target.addEventListener('mouseleave', () => {
        setShowPopup(false);
      });
    } else if (trigger === 'click') {
      target.addEventListener('click', handleClick);
    }

    return () => {
      target.removeEventListener('mouseenter', () => {
        setShowPopup(true);
      });
      target.removeEventListener('mouseleave', () => {
        setShowPopup(false);
      });
      target.removeEventListener('click', handleClick);
    };
  }, [target]);

  if (children) {
    return (
      <>
        {React.cloneElement(React.Children.only(children), {
          ref: (el: any) => setTarget(el),
        })}
        <Popup
          target={target}
          show={showPopup}
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
