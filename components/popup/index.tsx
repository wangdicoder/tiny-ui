import React, { useState, useCallback } from 'react';
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
  const rect = getRect(target);
  const popupRect = getRect(popup);
  let top = rect.top + getScroll(window);
  let left = rect.left + getScroll(window, false);

  switch (placement) {
    case 'bottom-center':
      top = top + topGap + rect.height;
      left = left + leftGap + rect.width / 2;
      break;

    case 'bottom-left':
      top = top + topGap + rect.height;
      left = left + leftGap;
      break;

    case 'top-center':
      top = top - topGap;
      left = left + leftGap + rect.width / 2;
      break;

    case 'top-left':
      top = top - topGap;
      left = left + leftGap;
      break;

    case 'top-right':
      top = top - topGap;
      left = left + leftGap + rect.width - popupRect.width;
      break;

    // case 'left':
    //   top = top + rect.height / 2;
    //   left = left - leftGap;
    //   break;
    //
    // case 'right':
    //   top = top + rect.height / 2;
    //   left = left + rect.width + leftGap;
    //   break;
    //
    // case 'right-start':
    //   top = top + topGap;
    //   left = left + rect.width + leftGap;
    //   break;
  }

  return {
    top,
    left,
    width: rect.width,
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

  const popupRef = useCallback(
    popup => {
      if (target) {
        const offset = getOffset({ target, popup, topGap, leftGap, placement });
        setLeft(`${offset.left}px`);
        setTop(`${offset.top}px`);
      }
    },
    [target]
  );

  return (
    <Portal>
      <div className={`${prefixCls}`}>
        <div className={containerCls} style={{ left, top, zIndex }}>
          <div
            ref={popupRef}
            style={{ width: 'auto' }}
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
