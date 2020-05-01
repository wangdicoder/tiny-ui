import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';
import Popover, { TriggerType, Placement } from '../popover';

export interface TooltipProps extends BaseProps {
  title: string | React.ReactNode;
  placement?: Placement;
  trigger?: TriggerType;
  visible?: boolean;
  defaultVisible?: boolean;
  onVisibleChange?: (visible: boolean) => void;
  arrow?: boolean;
  children: React.ReactElement;
}

const Tooltip = (props: TooltipProps): React.ReactElement => {
  const {
    defaultVisible = false,
    placement = 'top',
    trigger = 'hover',
    prefixCls = 'ty-tooltip',
    arrow = true,
    title,
    visible,
    onVisibleChange,
    className,
    style,
    children,
  } = props;
  const cls = classNames(prefixCls, className, `${prefixCls}_${placement}`);
  const [popupVisible, setPopupVisible] = useState('visible' in props ? visible : defaultVisible);

  useEffect(() => {
    'visible' in props && setPopupVisible(props.visible);
  }, [props]);

  return (
    <Popover
      role="tooltip"
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
