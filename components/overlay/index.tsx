import React, { useEffect } from 'react';
import classNames from 'classnames';
import Portal from '../portal';
import { CSSTransition } from 'react-transition-group';
import { BaseProps } from '../_utils/props';

export type OverlayMaskType = 'default' | 'inverted' | 'none';

export interface OverlayProps extends BaseProps {
  isShow?: boolean;
  blurred?: boolean;
  unmountOnExit?: boolean;
  clickCallback?: (e: React.MouseEvent) => void;
  zIndex?: number;
  onEnter?: () => void;
  onExit?: () => void;
  onEntered?: () => void;
  onExited?: () => void;
  type?: OverlayMaskType;
  children?: React.ReactNode;
}

const Overlay = (props: OverlayProps) => {
  const {
    isShow = false,
    blurred = false,
    unmountOnExit = true,
    zIndex = 1000,
    prefixCls = 'ty-overlay',
    type = 'default',
    clickCallback,
    onEnter,
    onEntered,
    onExit,
    onExited,
    children,
    style,
  } = props;
  const cls = classNames(prefixCls, `${prefixCls}_${type}`, { [`${prefixCls}_blurred`]: blurred });

  useEffect(() => {
    if (isShow) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });

  return (
    <Portal>
      <CSSTransition
        appear={true}
        onEnter={onEnter}
        onEntered={onEntered}
        onExit={onExit}
        onExited={onExited}
        in={isShow}
        mountOnEnter={true}
        unmountOnExit={unmountOnExit}
        classNames={`${prefixCls}_fade`}
        timeout={{ exit: 300, enter: 0 }}>
        <div
          tabIndex={-1}
          className={cls}
          onClick={clickCallback ? clickCallback : undefined}
          style={{ zIndex, ...style }}>
          {children}
        </div>
      </CSSTransition>
    </Portal>
  );
};

export default Overlay;
