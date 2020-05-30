import React, { useContext, useState } from 'react';
import classNames from 'classnames';
import Popover from '../popover';
import Button from '../button';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { WarningCircle } from '../_utils/components';
import { PopConfirmProps } from './types';

const PopConfirm = (props: PopConfirmProps): JSX.Element => {
  const {
    placement = 'top',
    confirmText = 'Yes',
    cancelText = 'No',
    title,
    icon,
    onConfirm,
    onCancel,
    onVisibleChange,
    className,
    children,
    prefixCls: customisedCls,
    ...otherProps
  } = props;
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('pop-confirm', configContext.prefixCls, customisedCls);
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
          {icon ? icon : <WarningCircle size={14} />}
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

PopConfirm.displayName = 'PopConfirm';

export default PopConfirm;
