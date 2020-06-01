import React, { useContext, useState } from 'react';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import Overlay from '../overlay';
import Button from '../button/button';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { ModalProps } from './types';

const Modal = (props: ModalProps): React.ReactElement => {
  const {
    visible = false,
    width = 520,
    centered = false,
    closable = true,
    unmountOnClose = true,
    maskType = 'default',
    maskClosable = true,
    confirmText = 'OK',
    cancelText = 'Cancel',
    confirmLoading = false,
    animation = 'slide',
    zIndex = 1000,
    onConfirm,
    onCancel,
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
    prefixCls: customisedCls,
  } = props;
  // The visible attribute controls the overlay status,
  // modal visible is triggered by overlay's enter and exit statuses
  const [modalVisible, setModalVisible] = useState(visible);
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('modal', configContext.prefixCls, customisedCls);
  const cls = classNames(prefixCls, className, { [`${prefixCls}_centered`]: centered });

  const renderFooter = (): React.ReactNode => {
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
            btnType="primary"
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
      onEnter={(): void => setModalVisible(true)}
      onExit={(): void => setModalVisible(false)}
      zIndex={zIndex}
      type={maskType}
      unmountOnExit={unmountOnClose}
      isShow={visible}
      onExited={afterClose}
      clickCallback={(e: React.MouseEvent): void => {
        maskClosable && onCancel ? onCancel(e) : undefined;
      }}
      style={maskStyle}>
      <div className={cls} style={{ top }}>
        <div style={{ width, ...style }}>
          <CSSTransition
            appear={true}
            in={modalVisible}
            classNames={`${prefixCls}__content_${animation}`}
            timeout={0}>
            <div className={`${prefixCls}__content`} onClick={(e): void => e.stopPropagation()}>
              {closable && (
                <div role="button" className={`${prefixCls}__close-btn`} onClick={onCancel}>
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
              {renderFooter()}
            </div>
          </CSSTransition>
        </div>
      </div>
    </Overlay>
  );
};

Modal.displayName = 'Modal';

export default Modal;
