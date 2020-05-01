import React, { useCallback, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { createPopper, Instance } from '@popperjs/core';
import { BaseProps } from '../_utils/props';
import Transition from '../transition';
import Portal from '../portal';

export type TriggerType = 'hover' | 'focus' | 'click' | 'contextmenu';
export type PopoverTheme = 'white' | 'dark';
export type Placement =
  | 'top-start'
  | 'top'
  | 'top-end'
  | 'bottom-start'
  | 'bottom'
  | 'bottom-end'
  | 'left-start'
  | 'left'
  | 'left-end'
  | 'right-start'
  | 'right'
  | 'right-end';

export interface PopoverProps extends BaseProps {
  /** Aria type  **/
  role?: string;

  title?: React.ReactNode;
  content?: React.ReactNode;
  placement?: Placement;
  visible?: boolean;
  defaultVisible?: boolean;
  onVisibleChange?: (visible: boolean) => void;

  theme?: PopoverTheme;

  flip?: boolean;

  /** Determine whether display an arrow */
  arrow?: boolean;

  /** The distance between popup window and trigger target */
  offset?: number;

  /** Delay in seconds, before tooltip is shown on mouse enter */
  mouseEnterDelay?: number;

  /** Delay in seconds, before tooltip is hidden on mouse leave */
  mouseLeaveDelay?: number;

  /** Trigger mode */
  trigger?: TriggerType;
  children: React.ReactElement;
}

const Popover = (props: PopoverProps): React.ReactElement | null => {
  const {
    prefixCls = 'ty-popover',
    trigger = 'click',
    placement = 'top',
    defaultVisible = false,
    arrow = true,
    flip = true,
    offset = 0,
    theme = 'white',
    mouseEnterDelay = 100,
    mouseLeaveDelay = 100,
    title,
    content,
    visible,
    onVisibleChange,
    role,
    className,
    children,
  } = props;
  const cls = classNames(
    className,
    prefixCls,
    `${prefixCls}_${placement}`,
    `${prefixCls}_${theme}`
  );
  const [popupVisible, setPopupVisible] = useState('visible' in props ? visible : defaultVisible);
  const [target, setTarget] = useState<HTMLElement | undefined>(undefined);
  const popupRef = useRef<HTMLDivElement | null>(null);
  const delayDisplayPopupTimer = useRef<number | undefined>(undefined);
  const delayHidePopupTimer = useRef<number | undefined>(undefined);
  const popperInstance = useRef<Instance | undefined>(undefined);

  const displayPopup = useCallback(() => {
    setPopupVisible(true);
    onVisibleChange && onVisibleChange(true);
  }, [onVisibleChange]);

  const hidePopup = useCallback(() => {
    setPopupVisible(false);
    onVisibleChange && onVisibleChange(false);
  }, [onVisibleChange]);

  const delayDisplayPopup = useCallback((): void => {
    delayDisplayPopupTimer.current = window.setTimeout(() => {
      displayPopup();
    }, mouseEnterDelay);
  }, [mouseEnterDelay, displayPopup]);

  const delayHidePopup = useCallback((): void => {
    delayHidePopupTimer.current = window.setTimeout(() => {
      hidePopup();
    }, mouseLeaveDelay);
  }, [mouseLeaveDelay, hidePopup]);

  const handlePopupOnMouseEnter = (): void => {
    if (trigger === 'hover') {
      displayPopup();
      window.clearTimeout(delayHidePopupTimer.current);
    }
  };

  const handlePopupOnMouseLeave = (): void => {
    if (trigger === 'hover') {
      delayHidePopup();
      window.clearTimeout(delayDisplayPopupTimer.current);
    }
  };

  const handleTargetOnMouseEnter = useCallback((): void => {
    delayDisplayPopup();
    window.clearTimeout(delayHidePopupTimer.current);
  }, [delayDisplayPopup]);

  const handleTargetOnMouseLeave = useCallback((): void => {
    delayHidePopup();
    window.clearTimeout(delayDisplayPopupTimer.current);
  }, [delayHidePopup]);

  const documentOnClick = useCallback(
    (e: Event): void => {
      if (
        !target ||
        target.contains(e.target as HTMLElement) ||
        !popupRef.current ||
        (popupRef.current as HTMLDivElement).contains(e.target as HTMLElement)
      )
        return;

      hidePopup();
    },
    [target, hidePopup]
  );

  const handleTargetOnMouseClick = useCallback(
    (e: MouseEvent): void => {
      e.preventDefault();
      if (popupVisible) {
        hidePopup();
      } else {
        displayPopup();
        document.addEventListener('click', documentOnClick, { capture: true });
      }
    },
    [popupVisible, hidePopup, displayPopup, documentOnClick]
  );

  const transitionOnEnter = (): void => {
    const instance = createPopper(target as HTMLElement, popupRef.current as HTMLElement, {
      placement: placement as Placement,
      modifiers: [
        {
          name: 'flip',
          enabled: flip,
        },
        {
          name: 'offset',
          options: {
            offset: [0, arrow ? 10 + offset : 3 + offset],
          },
        },
      ],
    });
    if (trigger === 'hover') {
      instance.state.elements.popper.addEventListener('mouseenter', handlePopupOnMouseEnter);
      instance.state.elements.popper.addEventListener('mouseleave', handlePopupOnMouseLeave);
    }
    popperInstance.current = instance;
  };

  const transitionOnExited = (): void => {
    if (popperInstance.current) {
      if (trigger === 'hover') {
        popperInstance.current.state.elements.popper.removeEventListener(
          'mouseenter',
          handlePopupOnMouseEnter
        );
        popperInstance.current.state.elements.popper.removeEventListener(
          'mouseleave',
          handlePopupOnMouseLeave
        );
      }
      popperInstance.current.destroy();
    }
  };

  useEffect(() => {
    if (!target) return;

    if (trigger === 'hover') {
      target.addEventListener('mouseenter', handleTargetOnMouseEnter);
      target.addEventListener('mouseleave', handleTargetOnMouseLeave);
    } else if (trigger === 'click') {
      target.addEventListener('click', handleTargetOnMouseClick);
    } else if (trigger === 'focus') {
      if (target.nodeName === 'INPUT' || target.nodeName === 'TEXTAREA') {
        target.addEventListener('focus', displayPopup);
        target.addEventListener('blur', hidePopup);
      } else {
        target.addEventListener('mousedown', displayPopup);
        target.addEventListener('mouseup', hidePopup);
      }
    } else if (trigger === 'contextmenu') {
      target.addEventListener('contextmenu', handleTargetOnMouseClick);
    }

    return (): void => {
      target.removeEventListener('mouseenter', handleTargetOnMouseEnter);
      target.removeEventListener('mouseleave', handleTargetOnMouseLeave);
      target.removeEventListener('click', handleTargetOnMouseClick);
      target.removeEventListener('focus', displayPopup);
      target.removeEventListener('blur', hidePopup);
      target.removeEventListener('mousedown', displayPopup);
      target.removeEventListener('mouseup', hidePopup);
      target.removeEventListener('contextmenu', handleTargetOnMouseClick);
    };
  }, [
    target,
    trigger,
    handleTargetOnMouseClick,
    handleTargetOnMouseEnter,
    handleTargetOnMouseLeave,
    displayPopup,
    hidePopup,
  ]);

  useEffect(() => {
    'visible' in props && setPopupVisible(props.visible);
  }, [props]);

  const childProps = {
    ref: (el: HTMLElement): void => setTarget(el),
  };
  return (
    <>
      {React.cloneElement(React.Children.only(children), childProps)}
      <Portal>
        <Transition
          in={popupVisible}
          onEnter={transitionOnEnter}
          onExited={transitionOnExited}
          animation="zoom-in-left">
          <div role={role} className={cls} ref={popupRef}>
            {(title || content) && arrow && (
              <div data-popper-arrow className={`${prefixCls}__arrow`} />
            )}
            {title && <div className={`${prefixCls}__title`}>{title}</div>}
            {content && <div className={`${prefixCls}__content`}>{content}</div>}
          </div>
        </Transition>
      </Portal>
    </>
  );
};

export default Popover;
