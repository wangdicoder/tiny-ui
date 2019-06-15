import React, { ReactNode, useEffect } from 'react';
import classnames from 'classnames';
import { camelCaseToDash } from '../_utils/general';

export type NotificationPlacement = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
export type NotificationProps = {
    title?: ReactNode,
    description?: ReactNode,
    footer?: ReactNode
    onClick?: () => void,
    onClose?: () => void,
    willUnmount: () => void,
    duration?: number,
    placement: NotificationPlacement,
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode,
};

const defaultProps = {
    prefixCls: 'ty-notification',
};

const Notification = (props: NotificationProps) => {
    const { title, description, footer, placement, prefixCls, className, style } = props;
    const cls = classnames(prefixCls, className, `${prefixCls}_${camelCaseToDash(placement)}`);

    useEffect(() => {
        
    }, []);

    return (
        <div className={cls}>
            <div className={`${prefixCls}__container`} style={style}>
                <div>{title}</div>
                <div>{description}</div>
                {footer}
                <div className={`${prefixCls}__close`}>✕</div>
            </div>
        </div>
    );
};

Notification.defaultProps = defaultProps;

export default Notification;
