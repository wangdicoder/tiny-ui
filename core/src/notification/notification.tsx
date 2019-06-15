import React, { ReactNode, useEffect, useRef } from 'react';
import classnames from 'classnames';

export type NotificationProps = {
    title?: ReactNode,
    description?: ReactNode,
    footer?: ReactNode
    onClick?: React.MouseEventHandler,
    onClose?: React.MouseEventHandler,
    willUnmount: (height: number) => void,
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

let timer: number | null = null;
let height: number = 0;

const Notification = (props: NotificationProps) => {
    const {
        title, description, footer, duration, willUnmount, onClick, onClose,
        prefixCls, className, style,
    } = props;
    const cls = classnames(prefixCls, className);
    const ref = useRef<HTMLDivElement>(null);

    const closeBtnOnClick = (e: React.MouseEvent) => {
        timer && clearTimeout(timer);
        willUnmount(height);
        onClose && onClose(e);
    };

    useEffect(() => {
        height = (ref.current && ref.current.offsetHeight) || 0;
        if (duration !== 0) {
            timer = setTimeout(() => {
                willUnmount(height);
            }, duration);
        }
    }, []);

    return (
        <div className={cls} style={style} onClick={onClick} ref={ref}>
            <div>{title}</div>
            <div>{description}</div>
            {footer}
            <div className={`${prefixCls}__close`} onClick={closeBtnOnClick}>✕</div>
        </div>
    );
};

Notification.defaultProps = defaultProps;

export default Notification;
