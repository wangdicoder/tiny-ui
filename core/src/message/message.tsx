import React from 'react';
import classnames from 'classnames';
import Icon from '../icon';

export type MessageType =  'success' | 'error' | 'warning' | 'info' | 'loading';
export type MessageProps = {
    type: MessageType,
    content?: string,
    duration?: number,
    top?: number,
    offset?: number,
    icon?: React.ReactNode | boolean,
    onClose?: () => void,
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties,
};

const defaultProps = {
    prefixCls: 'ty-message',
    top: 0,
    offset: 15,
    duration: 3000,
};

const IconType: any = {
    success: 'check-fill',
    info: 'info-fill',
    warning: 'warn-fill',
    error: 'close-fill',
};

const Message = (props: MessageProps) => {
    const { type, icon, content, prefixCls, className, style } = props;
    const cls = classnames(prefixCls, className);

    const renderIcon = () => {
        if (typeof icon === 'boolean') {
            return <Icon type={IconType[type]} size={16} className={`${prefixCls}__icon`}/>;
        }

        return icon;
    };

    return (
        <div className={cls} style={style}>
            {renderIcon()}
            <span className={`${prefixCls}__content`}>{content}</span>
        </div>
    );
};

Message.defaultProps = defaultProps;

export default Message;
