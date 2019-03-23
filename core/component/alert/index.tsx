import * as React from 'react';
import { useState } from 'react';
import classNames from 'classnames';
import './style/index.css';
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

const Alert = (props: AlertProps) => {
    const { type, closeText, closable, afterClose, onClose, children, className, prefixCls, style } = props;
    const [isShow, setShow] = useState(true);
    const cls = classNames(
        prefixCls,
        className,
        [`${prefixCls}_${type}`],
    );

    const _closeBtnOnClick = (e: React.MouseEvent<HTMLSpanElement>) => {
        setShow(false);
        (onClose)(e);
    };

    // Setting close text attribute also allows to be closable
    const closeIcon = (closable || closeText) && (
        <span
            className={`${prefixCls}__close-btn`}
            onClick={_closeBtnOnClick}>
      {closeText || '✕'}
    </span>
    );

    return (
        <CSSTransition
            unmountOnExit={true}
            timeout={400}
            in={isShow}
            onExited={afterClose}
            classNames={`${prefixCls}_slide-up`}>
            <div className={cls} style={style}>
                {children}
                {closeIcon}
            </div>
        </CSSTransition>
    );
};

Alert.defaultProps = defaultProps;

export default Alert;
