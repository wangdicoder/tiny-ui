import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { createPopper, Instance } from '@popperjs/core';
import Transition, { AnimationName } from '../transition';
import Portal from '../portal';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { Placement, PopupProps } from './types';

const Popup = (props: PopupProps): JSX.Element => {
  const {
    disabled = false,
    trigger = 'click',
    placement = 'top',
    defaultVisible = false,
    arrow = true,
    flip = true,
    offset = 0,
    theme = 'light',
    usePortal = true,
    mouseEnterDelay = 100,
    mouseLeaveDelay = 100,
    prefixCls: customisedCls,
    content,
    visible,
    onVisibleChange,
    className,
    children,
    ...otherProps
  } = props;
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('popup', configContext.prefixCls, customisedCls);
  const cls = classNames(
    className,
    prefixCls,
    `${prefixCls}_${placement}`,
    `${prefixCls}_${theme}`
  );
  const [popupVisible, setPopupVisible] = useState('visible' in props ? visible : defaultVisible);
  const targetRef = useRef<HTMLDivElement | null>(null);
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
        !targetRef ||
        (targetRef.current as HTMLElement).contains(e.target as HTMLElement) ||
        !popupRef.current ||
        (popupRef.current as HTMLDivElement).contains(e.target as HTMLElement)
      )
        return;

      hidePopup();
    },
    [targetRef, hidePopup]
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
    const instance = createPopper(
      targetRef.current as HTMLElement,
      popupRef.current as HTMLElement,
      {
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
          {
            name: 'computeStyles',
            options: {
              gpuAcceleration: false,
              adaptive: false,
            },
          },
        ],
      }
    );
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
    if (disabled) return;

    if (!targetRef.current) return;
    const target = targetRef.current as HTMLElement;

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
    } else if (trigger === 'manual') {
      setPopupVisible(props.visible);
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
    props.visible,
    disabled,
    targetRef,
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

  const renderContent = () => (
    <Transition
      in={popupVisible}
      onEnter={transitionOnEnter}
      onExited={transitionOnExited}
      animation={`zoom-${placement}` as AnimationName}>
      <div {...otherProps} className={cls} ref={popupRef}>
        {content && arrow && <div data-popper-arrow className={`${prefixCls}__arrow`} />}
        {content}
      </div>
    </Transition>
  );

  return (
    <>
      <div ref={targetRef} className={`${prefixCls}__wrapper`}>
        {children}
      </div>
      {usePortal ? <Portal>{renderContent()}</Portal> : renderContent()}
    </>
  );
};

export default Popup;
