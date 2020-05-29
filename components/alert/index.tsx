import React, { useState, useRef, useContext } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { CheckCircle, CloseCircle, InfoCircle, WarningCircle } from '../_utils/components';
import { AlertProps } from './types';
import Transition from '../transition';

const setClosedStyle = (node: HTMLElement): void => {
  node.style.borderTopWidth = '0';
  node.style.paddingTop = '0';
  node.style.marginTop = '0';
  node.style.height = '0';
  node.style.paddingBottom = '0';
  node.style.borderBottomWidth = '0';
  node.style.marginBottom = '0';
};

const Alert = (props: AlertProps): JSX.Element => {
  const {
    type = 'info',
    iconSize = 14,
    prefixCls: customisedCls,
    title,
    icon,
    closeText,
    closable,
    afterClose,
    onClose,
    children,
    className,
    style,
    ...otherProps
  } = props;
  const [isShow, setShow] = useState(true);
  const ref = useRef<HTMLDivElement | null>(null);
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('alert', configContext.prefixCls, customisedCls);
  const cls = classNames(prefixCls, className, [`${prefixCls}_${type}`]);

  const closeBtnOnClick = (e: React.MouseEvent<HTMLSpanElement>): void => {
    ref.current && setClosedStyle(ref.current as HTMLDivElement);
    setShow(false);
    onClose && onClose(e);
  };

  // Setting close text attribute also allows to be closable
  const closeIcon = (closable || closeText) && (
    <span role="button" className={`${prefixCls}__close-btn`} onClick={closeBtnOnClick}>
      {closeText || '✕'}
    </span>
  );

  const renderIcon = (): React.ReactNode => {
    if (typeof icon === 'boolean') {
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

    return icon;
  };

  return (
    <Transition timeout={300} in={isShow} onExited={afterClose}>
      <div {...otherProps} role="alert" className={cls} style={style} ref={ref}>
        {icon && renderIcon()}
        <div>
          {title && <p className={`${prefixCls}__title`}>{title}</p>}
          {children}
        </div>
        {closeIcon}
      </div>
    </Transition>
  );
};

export default Alert;
