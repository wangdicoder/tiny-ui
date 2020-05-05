import React, { useState } from 'react';
import classNames from 'classnames';
import Popover, { PopoverProps } from '../popover';
import Icon from '../icon';
import Button from '../button';

export interface PopConfirmProps extends PopoverProps {
  confirmText?: string;
  cancelText?: string;
  onConfirm?: (e: React.MouseEvent) => void;
  onCancel?: (e: React.MouseEvent) => void;
  icon?: React.ReactNode;
}

const PopConfirm = (props: PopConfirmProps): React.ReactElement => {
  const {
    prefixCls = 'ty-pop-confirm',
    placement = 'top',
    confirmText = 'Yes',
    cancelText = 'No',
    title,
    icon,
    onConfirm,
    onCancel,
    onVisibleChange,
    className,
    style,
    children,
    ...otherProps
  } = props;
  const cls = classNames(prefixCls, className);
  const [visible, setVisible] = useState(false);

  const cancelOnClick = (e: React.MouseEvent): void => {
    setVisible(false);
    onCancel && onCancel(e);
  };

  const confirmOnClick = (e: React.MouseEvent): void => {
    setVisible(false);
    onConfirm && onConfirm(e);
  };

  const overlay = (): React.ReactElement => {
    return (
      <div className={`${prefixCls}__overlay`}>
        <div className={`${prefixCls}__messages`}>
          {icon ? icon : <Icon name="warn-fill" color="#f29000" />}
          <span className={`${prefixCls}__title`}>{title}</span>
        </div>
        <div className={`${prefixCls}__buttons`}>
          <Button size="sm" onClick={cancelOnClick}>
            {cancelText}
          </Button>
          <Button size="sm" btnType="primary" onClick={confirmOnClick}>
            {confirmText}
          </Button>
        </div>
      </div>
    );
  };

  return (
    <Popover
      {...otherProps}
      className={cls}
      role="alertdialog"
      visible={visible}
      onVisibleChange={(val: boolean): void => {
        setVisible(val);
        onVisibleChange && onVisibleChange(val);
      }}
      content={overlay()}
      placement={placement}>
      {children}
    </Popover>
  );
};

export default PopConfirm;
