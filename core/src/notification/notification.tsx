import React, { ReactNode, MouseEventHandler, useEffect, useRef } from 'react';
import classnames from 'classnames';
import Icon from '../icon';

export type NotificationType = 'success' | 'error' | 'warning' | 'info' | undefined;
export type NotificationProps = {
    type: NotificationType,
    title?: ReactNode,
    description?: ReactNode,
    footer?: ReactNode
    onClick?: MouseEventHandler,
    onClose?: MouseEventHandler,
    icon?: ReactNode | boolean,
    willUnmount: (height: number) => void,
    didMount: () => void;
    duration?: number,
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode,
};

const defaultProps = {
    prefixCls: 'ty-notification',
    duration: 4500,
};

const IconType: any = {
    success: { name: 'check-fill', color: '#52c41a' },
    info: { name: 'info-fill', color: '#1890ff' },
    warning: { name: 'warn-fill', color: '#faad14' },
    error: { name: 'close-fill', color: '#f5222d' },
};

const Notification = (props: NotificationProps) => {
    const {
        title, description, footer, duration, type, icon, willUnmount, didMount, onClick, onClose,
        prefixCls, className, style,
    } = props;
    const cls = classnames(prefixCls, className);
    const ref = useRef<HTMLDivElement>(null);
    let timer: number | null = null;
    let height: number = 0;

    const closeBtnOnClick = (e: React.MouseEvent) => {
        timer && clearTimeout(timer);
        willUnmount(height);
        onClose && onClose(e);
    };

    const renderIcon = () => {
        if (React.isValidElement(icon)) {
            return icon;
        } else if (typeof type === 'string') {
            return (
                <Icon
                    type={IconType[type].name}
                    color={IconType[type].color}
                    size={25}
                    className={`${prefixCls}__icon`}
                />
            );
        }

        return null;
    };

    useEffect(() => {
        didMount();
        height = (ref.current && ref.current.offsetHeight) || 0;

        if (duration !== 0) {
            timer = setTimeout(() => {
                willUnmount(height);
            }, duration);
        }
    }, []);

    return (
        <div className={cls} style={style} onClick={onClick} ref={ref}>
            {renderIcon()}
            <div>
                <div className={`${prefixCls}__title`}>{title}</div>
                {description}
                {footer}
                <div className={`${prefixCls}__close`} onClick={closeBtnOnClick}>✕</div>
            </div>
        </div>
    );
};

Notification.defaultProps = defaultProps;

export default Notification;
