import React, { useContext, useState } from 'react';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import { BaseProps } from '../_utils/props';
import Overlay, { OverlayMaskType } from '../overlay';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';

export type DrawerPlacement = 'top' | 'bottom' | 'left' | 'right';

export interface DrawerProps extends BaseProps {
  onClose?: (e: React.MouseEvent) => void;
  placement?: DrawerPlacement;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  zIndex?: number;
  size?: number | string;
  closable?: boolean;
  maskType?: OverlayMaskType;
  maskClosable?: boolean;
  unmountOnClose?: boolean;
  afterClose?: () => void;
  visible?: boolean;
  keyboard?: boolean;
  maskStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const Drawer = (props: DrawerProps): React.ReactElement => {
  const {
    visible,
    placement = 'right',
    size = 256,
    closable = true,
    unmountOnClose = true,
    maskType = 'default',
    maskClosable = true,
    onClose = (): void => {},
    prefixCls: customisedCls,
    afterClose,
    zIndex = 1000,
    header,
    footer,
    className,
    maskStyle,
    style,
    children,
  } = props;
  const [drawerVisible, setDrawerVisible] = useState(visible);
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('drawer', configContext.prefixCls, customisedCls);
  const cls = classNames(prefixCls, className, `${prefixCls}_${placement}`);
  const sty: React.CSSProperties =
    placement === 'top' || placement === 'bottom' ? { height: size } : { width: size };

  return (
    <Overlay
      onEnter={(): void => setDrawerVisible(true)}
      onExit={(): void => setDrawerVisible(false)}
      zIndex={zIndex}
      type={maskType}
      unmountOnExit={unmountOnClose}
      isShow={visible}
      onExited={afterClose}
      clickCallback={(e: React.MouseEvent): void => {
        maskClosable ? onClose(e) : undefined;
      }}
      style={maskStyle}>
      <div className={cls} style={{ ...style, ...sty }}>
        <CSSTransition
          appear={true}
          in={drawerVisible}
          timeout={0}
          classNames={`${prefixCls}__content_move`}>
          <div className={`${prefixCls}__content`} onClick={(e) => e.stopPropagation()}>
            {closable && (
              <div className={`${prefixCls}__close-btn`} onClick={onClose}>
                ✕
              </div>
            )}
            {header && <div className={`${prefixCls}__header`}>{header}</div>}
            <div className={`${prefixCls}__body`}>{children}</div>
            {footer && <div className={`${prefixCls}__footer`}>{footer}</div>}
          </div>
        </CSSTransition>
      </div>
    </Overlay>
  );
};

Drawer.displayName = 'Drawer';

export default Drawer;
