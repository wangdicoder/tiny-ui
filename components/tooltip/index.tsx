import React from 'react';
import classNames from 'classnames';
import Popover, { PopoverProps } from '../popover';

type TooltipProps = Omit<PopoverProps, 'content'>;

const Tooltip = (props: TooltipProps): React.ReactElement => {
  const {
    placement = 'top',
    prefixCls = 'ty-tooltip',
    trigger = 'hover',
    title,
    className,
    children,
    ...otherProps
  } = props;
  const cls = classNames(prefixCls, className, `${prefixCls}_${placement}`);

  return (
    <Popover
      {...otherProps}
      role="tooltip"
      theme="dark"
      trigger={trigger}
      className={cls}
      placement={placement}
      content={title}>
      {children}
    </Popover>
  );
};

export default Tooltip;
