import React, { ReactNode, useState, useRef, useContext } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/config-context';
import Icon from '../icon';
import { BaseProps } from '../_utils/props';
import { getPrefixCls } from '../_utils/general';
import Transition from '../transition';

export type AlertType = 'success' | 'info' | 'warning' | 'error';

export interface AlertProps
  extends BaseProps,
    Omit<React.PropsWithoutRef<JSX.IntrinsicElements['div']>, 'title'> {
  title?: string | ReactNode;
  type?: AlertType;
  icon?: boolean | ReactNode;
  iconSize?: number;
  /** Whether Alert can be closed */
  closable?: boolean;
  /** Close text to show */
  closeText?: ReactNode;
  /** Trigger when animation ending of Alert */
  afterClose?: () => void;
  onClose?: React.MouseEventHandler<HTMLSpanElement>;
  children?: ReactNode;
}

const IconType = Object.freeze({
  success: 'check-fill',
  info: 'info-fill',
  warning: 'warn-fill',
  error: 'close-fill',
});

const setClosedStyle = (node: HTMLElement): void => {
  node.style.borderTopWidth = '0';
  node.style.paddingTop = '0';
  node.style.marginTop = '0';
  node.style.height = '0';
  node.style.paddingBottom = '0';
  node.style.borderBottomWidth = '0';
  node.style.marginBottom = '0';
};

const Alert = (props: AlertProps): React.ReactElement => {
  const {
    prefixCls: customisedCls,
    type = 'info',
    iconSize = 14,
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
  const configContext = useContext(ConfigContext);
  const [isShow, setShow] = useState(true);
  const ref = useRef<HTMLDivElement | null>(null);
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
      return <Icon name={IconType[type]} size={iconSize} className={`${prefixCls}__icon`} />;
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
