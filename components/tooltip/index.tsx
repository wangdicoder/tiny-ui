import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';
import Popover, { TriggerType } from '../popover';
import { PlacementType } from '../popup';

export interface TooltipProps extends BaseProps {
  title?: string | React.ReactNode;
  placement?: PlacementType;
  trigger?: TriggerType;
  visible?: boolean;
  defaultVisible?: boolean;
  onVisibleChange?: (visible: boolean) => void;
  children: React.ReactElement;
}

const Tooltip = ({
  defaultVisible = false,
  placement = 'right-center',
  trigger = 'hover',
  prefixCls = 'ty-tooltip',
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
      gap={-2}
      onVisibleChange={onVisibleChange}
      visible={popupVisible}
      placement={placement}
      className={cls}
      style={style}
      trigger={trigger}
      content={title}>
      {children}
    </Popover>
  );
};

export default Tooltip;
