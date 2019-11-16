import React, { ReactNode, useEffect, useRef } from 'react';
import classNames from 'classnames';
import Icon from '../icon';
import { BaseProps } from '../_utils/props';

export type NotificationType = 'success' | 'error' | 'warning' | 'info' | undefined;

export interface NotificationProps extends BaseProps {
  type: NotificationType;
  title?: ReactNode;
  description?: ReactNode;
  footer?: ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  onClose?: (e: React.MouseEvent) => void;
  icon?: ReactNode | boolean;
  willUnmount: (height: number) => void;
  didMount: () => void;
  duration?: number;
  children?: React.ReactNode;
}

const IconType: { [type: string]: { name: string; color: string } } = {
  success: { name: 'check-fill', color: '#52c41a' },
  info: { name: 'info-fill', color: '#1890ff' },
  warning: { name: 'warn-fill', color: '#faad14' },
  error: { name: 'close-fill', color: '#f5222d' },
};

const Notification = ({
  prefixCls = 'ty-notification',
  duration = 4500,
  ...restProps
}: NotificationProps) => {
  const {
    title,
    description,
    footer,
    type,
    icon,
    willUnmount,
    didMount,
    onClick,
    onClose,
    className,
    style,
  } = restProps;
  const cls = classNames(prefixCls, className);
  const ref = useRef<HTMLDivElement | null>(null);
  let timer: number | null = null;
  let height = 0;

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
    height = (ref.current && ref.current!.offsetHeight) || 0;

    if (duration !== 0) {
      timer = window.setTimeout(() => {
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
        <div className={`${prefixCls}__close`} onClick={closeBtnOnClick}>
          ✕
        </div>
      </div>
    </div>
  );
};

export default Notification;
