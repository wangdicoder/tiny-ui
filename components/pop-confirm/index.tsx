import React, { useState } from 'react';
import classNames from 'classnames';
import Popover, { TriggerType } from '../popover';
import { PlacementType } from '../popup';
import Icon from '../icon';
import Button from '../button';
import { BaseProps } from '../_utils/props';

export interface PopConfirmProps extends BaseProps {
  title?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: (e: React.MouseEvent) => void;
  onCancel?: (e: React.MouseEvent) => void;
  icon?: React.ReactNode;
  placement?: PlacementType;
  trigger?: TriggerType;
  children: React.ReactElement;
}

const PopConfirm = (props: PopConfirmProps): React.ReactElement => {
  const {
    prefixCls = 'ty-popconfirm',
    placement = 'top-center',
    trigger = 'click',
    confirmText = 'Yes',
    cancelText = 'No',
    title,
    icon,
    onConfirm,
    onCancel,
    className,
    style,
    children,
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
      <div className={cls} style={style}>
        <div className={`${prefixCls}__messages`}>
          {icon ? icon : <Icon name="warn-fill" color="#f29000" />}
          <span className={`${prefixCls}__title`}>{title}</span>
        </div>
        <div className={`${prefixCls}__buttons`}>
          <Button size="sm" onClick={cancelOnClick}>
            {cancelText}
          </Button>
          <Button size="sm" color="primary" onClick={confirmOnClick}>
            {confirmText}
          </Button>
        </div>
      </div>
    );
  };

  return (
    <Popover
      role="alertdialog"
      visible={visible}
      onVisibleChange={(val: boolean): void => {
        setVisible(val);
      }}
      content={overlay()}
      placement={placement}
      trigger={trigger}>
      {children}
    </Popover>
  );
};

export default PopConfirm;
