import React, { useState } from 'react';
import classNames from 'classnames';
import Popover, { PlacementTypes, TriggerTypes } from '../popover/old';
import Icon from '../icon';
import Button from '../button';
import { BaseProps } from '../_utils/props';

export interface PopconfirmProps extends BaseProps {
  title?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: (e: React.MouseEvent) => void;
  onCancel?: (e: React.MouseEvent) => void;
  icon?: React.ReactNode;
  placement?: PlacementTypes;
  trigger?: TriggerTypes | TriggerTypes[];
  children?: React.ReactNode;
}

const Popconfirm = ({
  prefixCls = 'ty-popconfirm',
  placement = 'topCenter',
  trigger = 'click',
  confirmText = 'Yes',
  cancelText = 'No',
  ...restProps
}: PopconfirmProps): React.ReactElement => {
  const { title, icon, onConfirm, onCancel, className, style, children } = restProps;
  const cls = classNames(prefixCls, className);
  const [visible, setVisible] = useState(false);

  const cancelOnClick = (e: React.MouseEvent) => {
    setVisible(false);
    onCancel && onCancel(e);
  };

  const confirmOnClick = (e: React.MouseEvent) => {
    setVisible(false);
    onConfirm && onConfirm(e);
  };

  const overlay = () => {
    return (
      <div className={cls} style={style}>
        <div className={`${prefixCls}__messages`}>
          {icon ? icon : <Icon type="warn-fill" color="#f29000" />}
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
      visible={visible}
      onVisibleChange={(val: boolean): void => {
        setVisible(val);
      }}
      overlay={overlay()}
      arrow
      placement={placement}
      trigger={trigger}>
      {children}
    </Popover>
  );
};

export default Popconfirm;
