import React from 'react';
import { useState, useRef } from 'react';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';

export type AlertProps = {
    type: 'success' | 'info' | 'warning' | 'error',
    /** Whether Alert can be closed */
    closable?: boolean,
    /** Close text to show */
    closeText?: React.ReactNode,
    /** Trigger when animation ending of Alert */
    afterClose?: () => void;
    onClose?: React.MouseEventHandler<HTMLSpanElement>,
    className?: string,
    children?: React.ReactNode,
    prefixCls?: string,
    style?: React.CSSProperties,
} & typeof defaultProps;

const defaultProps = {
    prefixCls: 'ty-alert',
    type: 'info',
    onClose: () => {
    },
};

const setStyle = (node: HTMLElement) => {
    node.style.borderTopWidth = '0';
    node.style.paddingTop = '0';
    node.style.marginTop = '0';
    node.style.height = '0';
    node.style.paddingBottom = '0';
    node.style.borderBottomWidth = '0';
    node.style.marginBottom = '0';
};

const Alert = (props: AlertProps) => {
    const { type, closeText, closable, afterClose, onClose, children, className, prefixCls, style } = props;
    const [isShow, setShow] = useState(true);
    const ref = useRef<HTMLDivElement>(null);
    const cls = classNames(
        prefixCls,
        className,
        [`${prefixCls}_${type}`],
    );

    const closeBtnOnClick = (e: React.MouseEvent<HTMLSpanElement>) => {
        ref.current && setStyle(ref.current);
        setShow(false);
        (onClose)(e);
    };

    // Setting close text attribute also allows to be closable
    const closeIcon = (closable || closeText) && (
        <span
            className={`${prefixCls}__close-btn`}
            onClick={closeBtnOnClick}>
            {closeText || '✕'}
        </span>
    );

    return (
        <CSSTransition
            unmountOnExit={true}
            timeout={300}
            in={isShow}
            onExited={afterClose}
            classNames={`${prefixCls}_slide-up`}>
            <div className={cls} style={style} ref={ref}>
                {children}
                {closeIcon}
            </div>
        </CSSTransition>
    );
};

Alert.defaultProps = defaultProps;

export default Alert;
