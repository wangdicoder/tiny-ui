import React, { useEffect } from 'react';
import classNames from 'classnames';
import Portal from '../portal';
import { CSSTransition } from 'react-transition-group';
import { BaseProps } from '../_utils/props';

export type OverlayMaskType = 'default' | 'inverted' | 'none';

export interface OverlayProps extends BaseProps {
  isShow?: boolean;
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

const Overlay = ({
  isShow = false,
  unmountOnExit = true,
  zIndex = 1000,
  prefixCls = 'ty-overlay',
  type = 'default',
  ...restProps
}: OverlayProps) => {
  const { clickCallback, onEnter, onEntered, onExit, onExited, children, style } = restProps;
  const cls = classNames(prefixCls, `${prefixCls}_${type}`);

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
