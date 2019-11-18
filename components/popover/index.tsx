import React, { useEffect, useState } from 'react';
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
  const [container, setContainer] = useState<HTMLElement | undefined>(undefined);

  const handlePopupMouseOver = () => {
    trigger === 'hover' && setShowPopup(true);
  };

  const handlePopupMouseOut = () => {
    trigger === 'hover' && setShowPopup(false);
  };

  useEffect(() => {
    if (!container) return undefined;

    if (trigger === 'hover') {
      container.addEventListener('mouseenter', () => {
        setShowPopup(true);
      });
      container.addEventListener('mouseleave', () => {
        setShowPopup(false);
      });
    }

    return () => {
      container.removeEventListener('mouseenter', () => {
        setShowPopup(true);
      });
      container.removeEventListener('mouseleave', () => {
        setShowPopup(false);
      });
    };
  }, [container]);

  if (children) {
    return (
      <>
        {React.cloneElement(React.Children.only(children), {
          ref: (el: any) => setContainer(el),
        })}
        <Popup
          target={container}
          show={showPopup}
          placement={placement}
          onMouseOver={handlePopupMouseOver}
          onMouseOut={handlePopupMouseOut}>
          <div className={cls}>
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
