import * as React from 'react';
import './style/index.css';
import classNames from 'classnames';
import Portal from '../portal';
import Animated from '../../util/animated';
import Overlay from '../overlay';
import Button, { ButtonProps } from '../button';

export type ModalProps = {
    visible?: boolean,
    title?: string,
    width?: number | string,
    closable?: boolean,
    unmountClose?: boolean,
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
    width: 520,
    closable: true,
    visible: false,
    unmountClose: false,
    prefixCls: 'ty-modal',
    confirmText: 'OK',
    cancelText: 'Cancel',
    onConfirm: () => {
    },
    onCancel: () => {
    },
};

const Modal = (props: ModalProps) => {
    const {
        width, title, visible, closable, unmountClose, confirmText, cancelText, onConfirm, onCancel,
        confirmButtonProps, cancelButtonProps, prefixCls, className, style, children,
    } = props;
    const cls = classNames(
        prefixCls,
        className,
    );

    if (visible) {
        return (
            <Portal>
                <Overlay>
                    <div className={cls} style={{ width, ...style }}>
                        <Animated isUnmount={unmountClose} isShow={visible} transitionName={`${prefixCls}_scale`}>
                            <div className={`${prefixCls}__content`}>
                                {closable && <div className={`${prefixCls}__close-btn`} onClick={onCancel}>✕</div>}
                                <div className={`${prefixCls}__header`}>
                                    <div className={`${prefixCls}__title`}>{title}</div>
                                </div>
                                <div className={`${prefixCls}__body`}>
                                    {children}
                                </div>
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
                            </div>
                        </Animated>
                    </div>
                </Overlay>
            </Portal>
        );
    }

    return null;
};

Modal.defaultProps = defaultProps;

export default Modal;
