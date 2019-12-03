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
  gap?: number;
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
  gap,
  placement,
}: {
  target: HTMLElement;
  popup: HTMLElement;
  gap: number;
  placement: PlacementType;
}): Offset => {
  const targetRect = getRect(target);
  const popupRect = getRect(popup);
  let top = targetRect.top + getScroll(window);
  let left = targetRect.left + getScroll(window, false);

  switch (placement) {
    case 'top-left':
      top = top - gap - popupRect.height;
      break;

    case 'top-center':
      top = top - gap - popupRect.height;
      left = left + targetRect.width / 2 - popupRect.width / 2;
      break;

    case 'top-right':
      top = top - gap - popupRect.height;
      left = left + targetRect.width - popupRect.width;
      break;

    case 'bottom-left':
      top = top + gap + targetRect.height;
      break;

    case 'bottom-center':
      top = top + gap + targetRect.height;
      left = left + targetRect.width / 2 - popupRect.width / 2;
      break;

    case 'bottom-right':
      top = top + gap + targetRect.height;
      left = left + targetRect.width - popupRect.width;
      break;

    case 'left-top':
      left = left - gap - popupRect.width;
      break;

    case 'left-center':
      top = top + targetRect.height / 2 - popupRect.height / 2;
      left = left - gap - popupRect.width;
      break;

    case 'left-bottom':
      top = top + targetRect.height - popupRect.height;
      left = left - gap - popupRect.width;
      break;

    case 'right-top':
      left = left + gap + targetRect.width;
      break;

    case 'right-center':
      top = top + targetRect.height / 2 - popupRect.height / 2;
      left = left + gap + targetRect.width;
      break;

    case 'right-bottom':
      top = top + targetRect.height - popupRect.height;
      left = left + gap + targetRect.width;
      break;
  }

  return {
    top,
    left,
    width: targetRect.width,
    placement,
  };
};

const Popup = (props: PopupProps): React.ReactElement | null => {
  const {
    prefixCls = 'ty-popup',
    placement = 'top-center',
    show = false,
    gap = 0,
    zIndex = 999,
    target,
    className,
    children,
    onMouseEnter,
    onMouseLeave,
    onMouseOut,
    onMouseOver,
  } = props;
  const containerCls = classNames(`${prefixCls}__container`, {
    [`${prefixCls}__container_hide`]: !show,
  });
  const contentCls = classNames(`${prefixCls}__content`, className, `${prefixCls}_${placement}`);
  const [top, setTop] = useState('0');
  const [left, setLeft] = useState('0');
  const popupRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (target && popupRef.current) {
      const offset = getOffset({ target, popup: popupRef.current!, gap, placement });
      setLeft(`${offset.left}px`);
      setTop(`${offset.top}px`);
    }
  }, [show, top, left, gap, placement]);

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
