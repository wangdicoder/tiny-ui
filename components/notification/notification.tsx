import React, { useContext, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { CheckCircle, CloseCircle, InfoCircle, WarningCircle } from '../_utils/components';
import { NotificationProps } from './types';

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
  const height = useRef(0);

  const closeBtnOnClick = (e: React.MouseEvent): void => {
    timerRef.current && window.clearTimeout(timerRef.current);
    willUnmount(height.current);
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
    const node = ref.current;
    height.current = node ? node.offsetHeight : 0;

    if (duration !== 0) {
      timerRef.current = window.setTimeout(() => {
        willUnmount(height.current);
      }, duration);
    }
  }, [didMount, duration, willUnmount]);

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
