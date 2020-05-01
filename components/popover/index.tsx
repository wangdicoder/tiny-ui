import React, { useCallback, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';
import { createPopper, Instance } from '@popperjs/core';
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
  gap?: number;

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
    // gap = 0,
    theme = 'white',
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

  const updateVisible = useCallback(
    (isVisible: boolean): void => {
      setPopupVisible(isVisible);
      onVisibleChange && onVisibleChange(isVisible);
    },
    [onVisibleChange]
  );

  let timer = -1;
  const onMouseEnter = useCallback((): void => {
    clearTimeout(timer);
    updateVisible(true);
  }, [timer, updateVisible]);

  const onMouseLeave = useCallback((): void => {
    timer = setTimeout(() => {
      updateVisible(false);
    }, mouseLeaveDelay);
  }, []);

  const documentOnClick = useCallback(
    (e: Event): void => {
      if (
        !target ||
        target.contains(e.target as HTMLElement) ||
        !popupRef.current ||
        (popupRef.current as HTMLDivElement).contains(e.target as HTMLElement)
      )
        return;

      updateVisible(false);
    },
    [target, updateVisible]
  );

  const onMouseClick = useCallback((): void => {
    updateVisible(true);
    document.addEventListener('click', documentOnClick);
  }, [documentOnClick, updateVisible]);

  const onMouseDown = useCallback((): void => {
    updateVisible(true);
  }, [updateVisible]);

  const onMouseUp = useCallback((): void => {
    updateVisible(false);
  }, [updateVisible]);

  let popperInstance: Instance | null = null;
  const transitionOnEnter = (): void => {
    popperInstance = createPopper(target as HTMLElement, popupRef.current as HTMLElement, {
      placement: placement as Placement,
      modifiers: [
        {
          name: 'preventOverflow',
          options: {
            mainAxis: flip,
          },
        },
      ],
    });
    if (trigger === 'hover') {
      popperInstance.state.elements.popper.addEventListener('mouseenter', onMouseEnter);
      popperInstance.state.elements.popper.addEventListener('mouseleave', onMouseLeave);
    }
  };

  const transitionOnExited = (): void => {
    if (popperInstance) {
      if (trigger === 'hover') {
        popperInstance.state.elements.popper.removeEventListener('mouseenter', onMouseEnter);
        popperInstance.state.elements.popper.removeEventListener('mouseleave', onMouseLeave);
      }
      popperInstance.destroy();
    }
  };

  useEffect(() => {
    if (target) {
      if (trigger === 'hover') {
        target.addEventListener('mouseenter', onMouseEnter);
        target.addEventListener('mouseleave', onMouseLeave);
      } else if (trigger === 'click') {
        target.addEventListener('click', onMouseClick);
      } else if (trigger === 'focus') {
        if (target.nodeName === 'INPUT' || target.nodeName === 'TEXTAREA') {
          target.addEventListener('focus', onMouseDown);
          target.addEventListener('blur', onMouseUp);
        } else {
          target.addEventListener('mousedown', onMouseDown);
          target.addEventListener('mouseup', onMouseUp);
        }
      } else if (trigger === 'contextmenu') {
        target.addEventListener('contextmenu', onMouseClick);
      }
    }

    return (): void => {
      if (target) {
        if (trigger === 'hover') {
          target.removeEventListener('mouseenter', onMouseEnter);
          target.removeEventListener('mouseleave', onMouseLeave);
        } else if (trigger === 'click') {
          target.removeEventListener('click', onMouseClick);
        } else if (trigger === 'focus') {
          if (target.nodeName === 'INPUT' || target.nodeName === 'TEXTAREA') {
            target.removeEventListener('focus', onMouseDown);
            target.removeEventListener('blur', onMouseUp);
          } else {
            target.removeEventListener('mousedown', onMouseDown);
            target.removeEventListener('mouseup', onMouseUp);
          }
        } else if (trigger === 'contextmenu') {
          target.removeEventListener('contextmenu', onMouseClick);
        }
      }
    };
  }, [target, trigger, onMouseClick, onMouseEnter, onMouseLeave, onMouseDown, onMouseUp]);

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
            {(title || content) && arrow && <div className={`${prefixCls}__arrow`} />}
            {title && <div className={`${prefixCls}__title`}>{title}</div>}
            {content && <div className={`${prefixCls}__content`}>{content}</div>}
          </div>
        </Transition>
      </Portal>
    </>
  );
};

export default Popover;
