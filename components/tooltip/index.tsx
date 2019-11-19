import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';
import Popover, { TriggerType } from '../popover';
import { PlacementType } from '../popup';

export interface TooltipProps extends BaseProps {
  title: string | React.ReactNode;
  placement?: PlacementType;
  trigger?: TriggerType;
  visible?: boolean;
  defaultVisible?: boolean;
  onVisibleChange?: (visible: boolean) => void;
  arrow?: boolean;
  children: React.ReactElement;
}

const Tooltip = ({
  defaultVisible = false,
  placement = 'top-center',
  trigger = 'hover',
  prefixCls = 'ty-tooltip',
  arrow = true,
  ...restProps
}: TooltipProps) => {
  const { title, visible, onVisibleChange, className, style, children } = restProps;
  const cls = classNames(prefixCls, className, `${prefixCls}_${placement}`);
  const [popupVisible, setPopupVisible] = useState(
    'visible' in restProps ? visible : defaultVisible
  );

  useEffect(() => {
    'visible' in restProps && setPopupVisible(restProps.visible);
  }, [restProps.visible]);

  return (
    <Popover
      theme="dark"
      onVisibleChange={onVisibleChange}
      visible={popupVisible}
      placement={placement}
      arrow={arrow}
      gap={-2}
      className={cls}
      style={style}
      trigger={trigger}
      content={title}>
      {children}
    </Popover>
  );
};

export default Tooltip;
