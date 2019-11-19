import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import Portal from '../portal';
import { BaseProps } from '../_utils/props';
import { getRect, getScroll } from '../_utils/dom';

export type PlacementType =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right'
  | 'left-top'
  | 'left-center'
  | 'left-bottom'
  | 'right-top'
  | 'right-center'
  | 'right-bottom';

export interface PopupProps extends BaseProps {
  target?: HTMLElement;
  placement?: PlacementType;
  show?: boolean;
  topGap?: number;
  leftGap?: number;
  zIndex?: number;
  onMouseOver?: React.MouseEventHandler<HTMLDivElement>;
  onMouseOut?: React.MouseEventHandler<HTMLDivElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
  children?: React.ReactNode;
}

type Offset = { width: number; top: number; left: number; placement: string };
const getOffset = ({
  target,
  popup,
  topGap,
  leftGap,
  placement,
}: {
  target: HTMLElement;
  popup: HTMLElement;
  topGap: number;
  leftGap: number;
  placement: PlacementType;
}): Offset => {
  const targetRect = getRect(target);
  const popupRect = getRect(popup);
  let top = targetRect.top + getScroll(window);
  let left = targetRect.left + getScroll(window, false);

  switch (placement) {
    case 'top-left':
      top = top - topGap - popupRect.height;
      left = left + leftGap;
      break;

    case 'top-center':
      top = top - topGap - popupRect.height;
      left = left + leftGap + targetRect.width / 2 - popupRect.width / 2;
      break;

    case 'top-right':
      top = top - topGap - popupRect.height;
      left = left + leftGap + targetRect.width - popupRect.width;
      break;

    case 'bottom-left':
      top = top + topGap + targetRect.height;
      left = left + leftGap;
      break;

    case 'bottom-center':
      top = top + topGap + targetRect.height;
      left = left + leftGap + targetRect.width / 2 - popupRect.width / 2;
      break;

    case 'bottom-right':
      top = top + topGap + targetRect.height;
      left = left + leftGap + targetRect.width - popupRect.width;
      break;

    case 'left-top':
      top = top + topGap;
      left = left - leftGap - popupRect.width;
      break;

    case 'left-center':
      top = top + topGap + targetRect.height / 2 - popupRect.height / 2;
      left = left - leftGap - popupRect.width;
      break;

    case 'left-bottom':
      top = top + topGap + targetRect.height - popupRect.height;
      left = left - leftGap - popupRect.width;
      break;

    case 'right-top':
      top = top + topGap;
      left = left + leftGap + targetRect.width;
      break;

    case 'right-center':
      top = top + targetRect.height / 2 - popupRect.height / 2;
      left = left + leftGap + targetRect.width;
      break;

    case 'right-bottom':
      top = top + topGap + targetRect.height - popupRect.height;
      left = left + leftGap + targetRect.width;
      break;
  }

  return {
    top,
    left,
    width: targetRect.width,
    placement,
  };
};

const Popup = ({
  prefixCls = 'ty-popup',
  placement = 'top-center',
  show = false,
  topGap = 2,
  leftGap = 2,
  zIndex = 999,
  ...restProps
}: PopupProps): React.ReactElement | null => {
  const {
    target,
    className,
    children,
    onMouseEnter,
    onMouseLeave,
    onMouseOut,
    onMouseOver,
  } = restProps;
  const containerCls = classNames(`${prefixCls}__container`, {
    [`${prefixCls}__container_hide`]: !show,
  });
  const contentCls = classNames(`${prefixCls}__content`, className, `${prefixCls}_${placement}`);
  const [top, setTop] = useState('0');
  const [left, setLeft] = useState('0');
  const popupRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (target && popupRef.current) {
      const offset = getOffset({ target, popup: popupRef.current!, topGap, leftGap, placement });
      setLeft(`${offset.left}px`);
      setTop(`${offset.top}px`);
    }
  }, [show, top, left, topGap, leftGap, placement]);

  return (
    <Portal>
      <div className={`${prefixCls}`}>
        <div className={containerCls} style={{ left, top, zIndex }}>
          <div
            ref={popupRef}
            className={contentCls}
            onMouseOut={onMouseOut}
            onMouseOver={onMouseOver}
            onMouseLeave={onMouseLeave}
            onMouseEnter={onMouseEnter}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default Popup;
