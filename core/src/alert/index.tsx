import React, { ReactNode } from 'react';
import { useState, useRef } from 'react';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import Icon from '../icon';

export type AlertProps = {
    title?: string,
    type?: 'success' | 'info' | 'warning' | 'error',
    icon?: boolean | ReactNode,
    iconSize?: number,
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
    iconSize: 14,
};

const IconType = {
    success: 'check-fill',
    info: 'info-fill',
    warning: 'warn-fill',
    error: 'close-fill',
};

const setClosedStyle = (node: HTMLElement) => {
    node.style.borderTopWidth = '0';
    node.style.paddingTop = '0';
    node.style.marginTop = '0';
    node.style.height = '0';
    node.style.paddingBottom = '0';
    node.style.borderBottomWidth = '0';
    node.style.marginBottom = '0';
};

const Alert = (props: AlertProps) => {
    const {
        title, type, icon, iconSize, closeText, closable, afterClose, onClose,
        children, className, prefixCls, style,
    } = props;
    const [isShow, setShow] = useState(true);
    const ref = useRef<HTMLDivElement>(null);
    const cls = classNames(
        prefixCls,
        className,
        [`${prefixCls}_${type}`],
    );

    const closeBtnOnClick = (e: React.MouseEvent<HTMLSpanElement>) => {
        ref.current && setClosedStyle(ref.current);
        setShow(false);
        onClose && (onClose)(e);
    };

    // Setting close text attribute also allows to be closable
    const closeIcon = (closable || closeText) && (
        <span
            className={`${prefixCls}__close-btn`}
            onClick={closeBtnOnClick}>
            {closeText || '✕'}
        </span>
    );

    const renderIcon = () => {
        if (typeof icon === 'boolean') {
            return <Icon type={IconType[type]} size={iconSize} className={`${prefixCls}__icon`}/>;
        }

        return icon;
    };

    return (
        <CSSTransition
            unmountOnExit={true}
            timeout={300}
            in={isShow}
            onExited={afterClose}
            classNames={`${prefixCls}_slide-up`}>
            <div className={cls} style={style} ref={ref}>
                {icon && renderIcon()}
                <div>
                    {title && <p className={`${prefixCls}__title`}>{title}</p>}
                    {children}
                </div>
                {closeIcon}
            </div>
        </CSSTransition>
    );
};

Alert.defaultProps = defaultProps;

export default Alert;
