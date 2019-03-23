import * as React from 'react';
import './style/index.css';
import classNames from 'classnames';
// import { CSSTransition } from 'react-transition-group';
import Overlay, { OverlayMaskType } from '../overlay';
import Button, { ButtonProps } from '../button';

export type ModalProps = {
    visible?: boolean,
    header?: string | React.ReactNode,
    footer?: null | React.ReactNode,
    width?: number | string,
    closable?: boolean,
    unmountOnClose?: boolean,
    afterClose?: () => any,
    maskType?: OverlayMaskType,
    maskClosable?: boolean,
    onConfirm?: React.MouseEventHandler<HTMLButtonElement>,
    onCancel?: React.MouseEventHandler<HTMLButtonElement>,
    confirmText?: string,
    cancelText?: string,
    confirmButtonProps?: ButtonProps,
    cancelButtonProps?: ButtonProps,
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode,
} & typeof defaultProps;

const defaultProps = {
    visible: false,
    width: 520,
    closable: true,
    unmountOnClose: true,
    maskType: 'default',
    maskClosable: true,
    prefixCls: 'ty-modal',
    confirmText: 'OK',
    cancelText: 'Cancel',
    onConfirm: () => {
    },
    onCancel: () => {
    },
    afterClose: () => {
    },
};

const Modal = (props: ModalProps) => {
    const {
        width, header, footer, visible, closable, maskType, maskClosable, unmountOnClose, afterClose, confirmText,
        cancelText, onConfirm, onCancel, confirmButtonProps, cancelButtonProps, prefixCls, className, style, children,
    } = props;
    const cls = classNames(
        prefixCls,
        className,
    );

    const _renderFooter = () => {
        if (React.isValidElement(footer)) {
            return footer;
        } else if (footer === null) {
            return null;
        } else {
            return (
                <div className={`${prefixCls}__footer`}>
                    <Button
                        {...cancelButtonProps}
                        onClick={onCancel}
                        className={`${prefixCls}__footer-btn`}>
                        {cancelText}
                    </Button>
                    <Button
                        {...confirmButtonProps}
                        onClick={onConfirm}
                        color="primary"
                        className={`${prefixCls}__footer-btn`}>
                        {confirmText}
                    </Button>
                </div>
            );
        }
    };

    return (
        <Overlay
            type={maskType}
            unmountOnExit={unmountOnClose}
            isShow={visible}
            afterClose={afterClose}
            clickCallback={() => (maskClosable && onCancel())}>
            <div className={cls} style={{ width, ...style }}>
                {/*<CSSTransition*/}
                {/*unmountOnExit={unmountOnClose} in={visible} classNames={`${prefixCls}_scale`} timeout={0}>*/}
                <div className={`${prefixCls}__content`}>
                    {closable && <div className={`${prefixCls}__close-btn`} onClick={onCancel}>✕</div>}
                    {header && (
                        <div className={`${prefixCls}__header`}>
                            <div className={`${prefixCls}__title`}>{header}</div>
                        </div>
                    )}
                    <div className={`${prefixCls}__body`}>
                        {children}
                    </div>
                    {_renderFooter()}
                </div>
                {/*</CSSTransition>*/}
            </div>
        </Overlay>
    );
};

Modal.defaultProps = defaultProps;

export default Modal;
