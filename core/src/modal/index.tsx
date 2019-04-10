import React, {useState} from 'react';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import Overlay, { OverlayMaskType } from '../overlay';
import Button, { ButtonProps } from '../button';

export type ModalProps = {
    visible?: boolean,
    header?: string | React.ReactNode,
    footer?: null | React.ReactNode,
    width?: number | string,
    centered?: boolean,
    closable?: boolean,
    unmountOnClose?: boolean,
    afterClose?: () => any,
    maskType?: OverlayMaskType,
    maskClosable?: boolean,
    confirmLoading?: boolean,
    onConfirm?: React.MouseEventHandler<HTMLButtonElement>,
    onCancel?: React.MouseEventHandler<HTMLButtonElement>,
    confirmText?: string,
    cancelText?: string,
    confirmButtonProps?: ButtonProps,
    cancelButtonProps?: ButtonProps,
    animation?: 'slide' | 'scale',
    top?: number,
    zIndex?: number,
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties,
    headerStyle?: React.CSSProperties,
    bodyStyle?: React.CSSProperties,
    footerStyle?: React.CSSProperties,
    maskStyle?: React.CSSProperties,
    children?: React.ReactNode,
} & typeof defaultProps;

const defaultProps = {
    visible: false,
    width: 520,
    centered: false,
    closable: true,
    unmountOnClose: true,
    maskType: 'default',
    maskClosable: true,
    prefixCls: 'ty-modal',
    confirmText: 'OK',
    cancelText: 'Cancel',
    confirmLoading: false,
    animation: 'slide',
    zIndex: 1000,
    onConfirm: () => {
    },
    onCancel: () => {
    },
};

const Modal = (props: ModalProps) => {
    const {
        width, centered, header, footer, visible, closable, maskType, maskClosable, unmountOnClose,
        afterClose, confirmText, cancelText, onConfirm, onCancel, confirmLoading,
        confirmButtonProps, cancelButtonProps, animation, zIndex, prefixCls, className, children,
        style, maskStyle, headerStyle, bodyStyle, footerStyle,
    } = props;
    // The visible attribute controls the overlay status,
    // modal visible is triggered by overlay's enter and exit statuses
    const [modalVisible, setModalVisible] = useState(visible);
    const cls = classNames(
        prefixCls,
        className,
        { [`${prefixCls}_centered`]: centered },
    );

    const _renderFooter = () => {
        if (React.isValidElement(footer)) {
            return footer;
        } else if (footer === null) {
            return null;
        } else {
            return (
                <div className={`${prefixCls}__footer`} style={footerStyle}>
                    <Button
                        {...cancelButtonProps}
                        onClick={onCancel}
                        className={`${prefixCls}__footer-btn`}>
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
            clickCallback={() => (maskClosable && onCancel())}
            style={maskStyle}>
            <div className={cls}>
                <div
                    style={{ width, ...style }}
                    onClick={(e) => e.stopPropagation()}>
                    <CSSTransition
                        appear={true} in={modalVisible} classNames={`${prefixCls}__content_${animation}`} timeout={0}>
                        <div className={`${prefixCls}__content`}>
                            {closable && <div className={`${prefixCls}__close-btn`} onClick={onCancel}>✕</div>}
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

Modal.defaultProps = defaultProps;

export default Modal;
