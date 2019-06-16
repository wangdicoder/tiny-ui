import React, { useEffect, useRef, useState, ReactNode } from 'react';
import classnames from 'classnames';
import Icon from '../icon';
import { CSSTransition } from 'react-transition-group';

export type MessageType = 'success' | 'error' | 'warning' | 'info' | 'loading' | undefined;
export type MessageProps = {
    type: MessageType,
    content: string,
    duration: number,
    icon?: ReactNode,
    extra?: ReactNode,
    willUnmount: (height: number) => void,
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties,
};

const defaultProps = {
    prefixCls: 'ty-message',
};

const IconType: any = {
    success: { name: 'check-fill', color: '#52c41a' },
    info: { name: 'info-fill', color: '#1890ff' },
    loading: { name: 'sync', color: '#1890ff' },
    warning: { name: 'warn-fill', color: '#faad14' },
    error: { name: 'close-fill', color: '#f5222d' },
};

const Message = (props: MessageProps) => {
    const { type, icon, content, duration, willUnmount, extra, prefixCls, className, style } = props;
    const cls = classnames(prefixCls, className);
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(true);

    const renderIcon = () => {
        if (React.isValidElement(icon)) {
            return icon;
        } else if (typeof type === 'string') {
            return (
                <Icon
                    type={IconType[type].name}
                    color={IconType[type].color}
                    size={16}
                    spin={type === 'loading'}
                    className={`${prefixCls}__icon`}
                />
            );
        }

        return null;
    };

    useEffect(() => {
        const height = (ref.current && ref.current.offsetHeight) || 0;
        setTimeout(() => {
            setVisible(false);
            willUnmount(height);
        }, duration);
    }, []);

    return (
        <CSSTransition
            in={visible}
            appear={true}
            timeout={0}
            classNames={`${prefixCls}_fade-slide`}>
            <div className={cls} style={style} ref={ref}>
                {renderIcon()}
                <span className={`${prefixCls}__content`}>{content}</span>
                {extra && <div className={`${prefixCls}__extra`}>{extra}</div>}
            </div>
        </CSSTransition>
    );
};

Message.defaultProps = defaultProps;

export default Message;
