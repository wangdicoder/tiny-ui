import React, { useState } from 'react';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import Overlay, { OverlayMaskType } from '../overlay';
import Button, { ButtonProps } from '../button';
import { BaseProps } from '../_utils/props';

export type ModalAnimation = 'slide' | 'scale';

export interface ModalProps extends BaseProps {
  visible?: boolean;
  header?: string | React.ReactNode;
  footer?: null | React.ReactNode;
  width?: number | string;
  centered?: boolean;
  closable?: boolean;
  unmountOnClose?: boolean;
  afterClose?: () => void;
  maskType?: OverlayMaskType;
  maskClosable?: boolean;
  confirmLoading?: boolean;
  onConfirm?: (e: React.MouseEvent) => void;
  onCancel?: (e: React.MouseEvent) => void;
  confirmText?: string;
  cancelText?: string;
  confirmButtonProps?: ButtonProps;
  cancelButtonProps?: ButtonProps;
  animation?: ModalAnimation;
  top?: number;
  zIndex?: number;
  headerStyle?: React.CSSProperties;
  bodyStyle?: React.CSSProperties;
  footerStyle?: React.CSSProperties;
  maskStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const Modal = ({
  visible = false,
  width = 520,
  centered = false,
  closable = true,
  unmountOnClose = true,
  maskType = 'default',
  maskClosable = true,
  prefixCls = 'ty-modal',
  confirmText = 'OK',
  cancelText = 'Cancel',
  confirmLoading = false,
  animation = 'slide',
  zIndex = 1000,
  onConfirm = () => {},
  onCancel = () => {},
  ...restProps
}: ModalProps): React.ReactElement => {
  const {
    top,
    header,
    footer,
    afterClose,
    confirmButtonProps,
    cancelButtonProps,
    className,
    children,
    style,
    maskStyle,
    headerStyle,
    bodyStyle,
    footerStyle,
  } = restProps;
  // The visible attribute controls the overlay status,
  // modal visible is triggered by overlay's enter and exit statuses
  const [modalVisible, setModalVisible] = useState(visible);
  const cls = classNames(prefixCls, className, { [`${prefixCls}_centered`]: centered });

  const _renderFooter = (): React.ReactNode => {
    if (React.isValidElement(footer)) {
      return footer;
    } else if (footer === null) {
      return null;
    } else {
      return (
        <div className={`${prefixCls}__footer`} style={footerStyle}>
          <Button onClick={onCancel} className={`${prefixCls}__footer-btn`} {...cancelButtonProps}>
            {cancelText}
          </Button>
          <Button
            loading={confirmLoading}
            onClick={onConfirm}
            color="primary"
            className={`${prefixCls}__footer-btn`}
            {...confirmButtonProps}>
            {confirmText}
          </Button>
        </div>
      );
    }
  };

  return (
    <Overlay
      onEnter={() => setModalVisible(true)}
      onExit={() => setModalVisible(false)}
      zIndex={zIndex}
      type={maskType}
      unmountOnExit={unmountOnClose}
      isShow={visible}
      onExited={afterClose}
      clickCallback={(e: React.MouseEvent): void => {
        maskClosable ? onCancel(e) : undefined;
      }}
      style={maskStyle}>
      <div className={cls} style={{ top }}>
        <div style={{ width, ...style }}>
          <CSSTransition
            appear={true}
            in={modalVisible}
            classNames={`${prefixCls}__content_${animation}`}
            timeout={0}>
            <div className={`${prefixCls}__content`} onClick={e => e.stopPropagation()}>
              {closable && (
                <div className={`${prefixCls}__close-btn`} onClick={onCancel}>
                  ✕
                </div>
              )}
              {header && (
                <div className={`${prefixCls}__header`} style={headerStyle}>
                  <div className={`${prefixCls}__title`}>{header}</div>
                </div>
              )}
              <div className={`${prefixCls}__body`} style={bodyStyle}>
                {children}
              </div>
              {_renderFooter()}
            </div>
          </CSSTransition>
        </div>
      </div>
    </Overlay>
  );
};

export default Modal;
