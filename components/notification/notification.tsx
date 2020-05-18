import React, { ReactNode, useContext, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { CheckCircle, CloseCircle, InfoCircle, WarningCircle } from '../_utils/components';

export type NotificationType = 'success' | 'error' | 'warning' | 'info' | undefined;

export interface NotificationProps
  extends BaseProps,
    Omit<React.PropsWithoutRef<JSX.IntrinsicElements['div']>, 'title'> {
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

const Notification = (props: NotificationProps): JSX.Element => {
  const {
    duration = 4500,
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
    prefixCls: customisedCls,
    ...otherProps
  } = props;
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('notification', configContext.prefixCls, customisedCls);
  const cls = classNames(prefixCls, className);
  const ref = useRef<HTMLDivElement | null>(null);
  const timerRef = useRef<number>();
  let height = 0;

  const closeBtnOnClick = (e: React.MouseEvent): void => {
    timerRef.current && window.clearTimeout(timerRef.current);
    willUnmount(height);
    onClose && onClose(e);
  };

  const renderIcon = (): React.ReactNode => {
    if (React.isValidElement(icon)) {
      return icon;
    } else if (typeof type === 'string') {
      const iconSize = 40;
      switch (type) {
        case 'success':
          return <CheckCircle size={iconSize} className={`${prefixCls}__icon`} />;
        case 'info':
          return <InfoCircle size={iconSize} className={`${prefixCls}__icon`} />;
        case 'warning':
          return <WarningCircle size={iconSize} className={`${prefixCls}__icon`} />;
        case 'error':
          return <CloseCircle size={iconSize} className={`${prefixCls}__icon`} />;
      }
    }

    return null;
  };

  useEffect(() => {
    didMount();
    height = (ref.current && ref.current!.offsetHeight) || 0;

    if (duration !== 0) {
      timerRef.current = window.setTimeout(() => {
        willUnmount(height);
      }, duration);
    }
  }, []);

  return (
    <div {...otherProps} className={cls} onClick={onClick} ref={ref}>
      {renderIcon()}
      <div>
        <div className={`${prefixCls}__title`}>{title}</div>
        {description}
        {footer}
        <div role="button" className={`${prefixCls}__close`} onClick={closeBtnOnClick}>
          ✕
        </div>
      </div>
    </div>
  );
};

export default Notification;
