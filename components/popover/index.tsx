import React, { useCallback, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';
import Popup, { PlacementType } from '../popup';
import warning from '../_utils/warning';
import { getArrowPlacementStyle } from './arrow-placement';

export type TriggerType = 'hover' | 'focus' | 'click' | 'context-menu';

export interface PopoverProps extends BaseProps {
  title?: React.ReactNode;
  content?: React.ReactNode;
  placement?: PlacementType;
  visible?: boolean;
  defaultVisible?: boolean;
  onVisibleChange?: (visible: boolean) => void;

  /** Determine whether display an arrow */
  arrow?: boolean;

  /** The distance between popup window and trigger target */
  gap?: number;

  /** Delay in seconds, before tooltip is shown on mouse enter */
  mouseEnterDelay?: number;

  /** Delay in seconds, before tooltip is hidden on mouse leave */
  mouseLeaveDelay?: number;

  /** Trigger mode */
  trigger?: TriggerType;
  children: React.ReactElement;
}

let eventTarget: EventTarget | null = null;
const Popover = ({
  prefixCls = 'ty-popover',
  placement = 'top-center',
  trigger = 'hover',
  defaultVisible = false,
  arrow = true,
  gap = 0,
  mouseEnterDelay = 100,
  mouseLeaveDelay = 100,
  ...restProps
}: PopoverProps): React.ReactElement | null => {
  const { title, content, visible, onVisibleChange, className, children } = restProps;
  const cls = classNames(className, prefixCls, `${prefixCls}_${placement}`);
  const [popupVisible, setPopupVisible] = useState(
    'visible' in restProps ? visible : defaultVisible
  );
  const [arrowStyle, setArrowStyle] = useState<React.CSSProperties>({});
  const [target, setTarget] = useState<HTMLElement | undefined>(undefined);
  const [delayHidePopupTimer, setDelayHidePopupTimer] = useState<number | undefined>(undefined);
  const [delayDisplayPopupTimer, setDelayDisplayPopupTimer] = useState<number | undefined>(
    undefined
  );
  const popupRef = useRef<HTMLDivElement | null>(null);

  const isInPopup = (): boolean => {
    const eventEl = eventTarget as HTMLElement;
    const flag: boolean = (popupRef.current as HTMLDivElement).contains(eventEl);
    eventTarget = null;
    return flag;
  };

  const displayPopup = useCallback(() => {
    setPopupVisible(true);
    onVisibleChange && onVisibleChange(true);
  }, [onVisibleChange]);

  const hidePopup = useCallback(() => {
    setPopupVisible(false);
    onVisibleChange && onVisibleChange(false);
  }, [onVisibleChange]);

  const delayDisplayPopup = useCallback((): void => {
    const delayDisplayPopupTimer = window.setTimeout(() => {
      displayPopup();
    }, mouseEnterDelay);
    setDelayDisplayPopupTimer(delayDisplayPopupTimer);
  }, [displayPopup, mouseEnterDelay]);

  const delayHidePopup = useCallback((): void => {
    const delayHidePopupTimer = window.setTimeout(() => {
      hidePopup();
    }, mouseLeaveDelay);
    setDelayHidePopupTimer(delayHidePopupTimer);
  }, [hidePopup, mouseLeaveDelay]);

  /**
   * Popup window - mouse enter callback
   */
  const handlePopupMouseOver = (): void => {
    if (trigger === 'hover') {
      displayPopup();
      clearTimeout(delayHidePopupTimer);
    }
  };

  /**
   * Popup window - mouse leave callback
   */
  const handlePopupMouseOut = (): void => {
    if (trigger === 'hover') {
      delayHidePopup();
      clearTimeout(delayDisplayPopupTimer);
    }
  };

  /**
   * Target(props.children) mouse enter callback
   */
  const handleTargetMouseEnter = useCallback((): void => {
    delayDisplayPopup();
    clearTimeout(delayHidePopupTimer);
  }, [delayHidePopupTimer, delayDisplayPopup]);

  /**
   * Target(props.children) mouse leave callback
   */
  const handleTargetMouseLeave = useCallback((): void => {
    delayHidePopup();
    clearTimeout(delayDisplayPopupTimer);
  }, [delayDisplayPopupTimer, delayHidePopup]);

  const handleClickOutside = useCallback(
    (e: Event): void => {
      eventTarget = e.target;
      if (isInPopup()) return;

      hidePopup();
      document.removeEventListener('click', handleClickOutside);
    },
    [hidePopup]
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
    [popupVisible, handleClickOutside, displayPopup, hidePopup]
  );

  useEffect(() => {
    if (!target) return;

    if (trigger === 'hover') {
      target.addEventListener('mouseenter', handleTargetMouseEnter);
      target.addEventListener('mouseleave', handleTargetMouseLeave);
    } else if (trigger === 'click') {
      target.addEventListener('click', handleClick);
    } else if (trigger === 'context-menu') {
      target.addEventListener('contextmenu', handleClick);
    } else {
      target.addEventListener('focus', displayPopup);
      target.addEventListener('blur', hidePopup);
    }

    return () => {
      target.removeEventListener('mouseenter', handleTargetMouseEnter);
      target.removeEventListener('mouseleave', handleTargetMouseLeave);
      target.removeEventListener('click', handleClick);
      target.removeEventListener('contextmenu', handleClick);
      target.removeEventListener('focus', displayPopup);
      target.removeEventListener('blur', hidePopup);
    };
  }, [
    target,
    trigger,
    handleTargetMouseEnter,
    handleTargetMouseLeave,
    displayPopup,
    hidePopup,
    handleClick,
  ]);

  useEffect(() => {
    if (!target) return;

    const style = getArrowPlacementStyle(target, placement);
    setArrowStyle(style);
  }, [target, placement]);

  useEffect(() => {
    'visible' in restProps && setPopupVisible(restProps.visible);
  }, [restProps.visible]);

  if (children) {
    return (
      <>
        {React.cloneElement(React.Children.only(children), {
          ref: (el: HTMLElement) => setTarget(el),
        })}
        <Popup
          target={target}
          gap={arrow ? 10 + gap : gap}
          show={popupVisible}
          placement={placement}
          onMouseOver={handlePopupMouseOver}
          onMouseOut={handlePopupMouseOut}>
          <div className={cls} ref={popupRef}>
            {arrow && <div className={`${prefixCls}__arrow`} style={arrowStyle} />}
            {title && <div className={`${prefixCls}__title`}>{title}</div>}
            {content && <div className={`${prefixCls}__content`}>{content}</div>}
          </div>
        </Popup>
      </>
    );
  }
  warning(false, 'Children is required.', true);
  return null;
};

export default Popover;
