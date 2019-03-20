import * as React from 'react';
import {useState} from 'react';
import classNames from 'classnames';
import './style/index.css';
import Animate from '../../util/Animate';

const noop = () => {
};

export type AlertProps = {
  type: 'success' | 'info' | 'warning' | 'error',
  /** Whether Alert can be closed */
  closable?: boolean,
  /** Close text to show */
  closeText?: React.ReactNode,
  /** Trigger when animation ending of Alert */
  afterClose?: () => void;
  onClose?: React.MouseEventHandler<HTMLAnchorElement>,
  className?: string,
  children?: React.ReactNode,
  prefixCls?: string,
  style?: React.CSSProperties,
};

const Alert = (props: AlertProps) => {
  const {type, closeText, closable, afterClose, onClose, children, className, prefixCls, style} = props;
  const [isShow, setShow] = useState<boolean>(true);
  const cls = classNames(
    prefixCls,
    [`${prefixCls}_${type}`],
    className,
  );

  const _closeBtnOnClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setShow(false);
    (onClose || noop)(e);
  };

  // Setting close text attribute also allows to be closable
  const closeIcon = (closable || closeText) && (
    <span
      className={`${prefixCls}__close-btn`}
      onClick={_closeBtnOnClick}>
            {closeText || '✕'}
        </span>
  );

  return (
    <Animate duration={400} isShow={isShow} onEnd={afterClose} transitionName={`${prefixCls}_slide-up`}>
      <div className={cls} style={style}>
        {children}
        {closeIcon}
      </div>
    </Animate>
  );
};

Alert.defaultProps = {
  prefixCls: 'ty-alert',
  type: 'info',
};

export default Alert;
