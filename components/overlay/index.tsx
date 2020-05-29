import React, { useContext, useEffect } from 'react';
import classNames from 'classnames';
import Portal from '../portal';
import { CSSTransition } from 'react-transition-group';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { OverlayProps } from './types';

const Overlay = (props: OverlayProps): JSX.Element => {
  const {
    isShow = false,
    blurred = false,
    unmountOnExit = true,
    zIndex = 1000,
    type = 'default',
    clickCallback,
    onEnter,
    onEntered,
    onExit,
    onExited,
    children,
    style,
    prefixCls: customisedCls,
  } = props;
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('overlay', configContext.prefixCls, customisedCls);
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
        <div tabIndex={-1} className={cls} onClick={clickCallback} style={{ zIndex, ...style }}>
          {children}
        </div>
      </CSSTransition>
    </Portal>
  );
};

Overlay.displayName = 'Overlay';

export default Overlay;
