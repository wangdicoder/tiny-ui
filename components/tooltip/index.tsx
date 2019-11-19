import React from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';
import Popover from '../popover';

export interface TooltipProps extends BaseProps {
  title?: string | React.ReactNode;
  visible?: boolean;
  children: React.ReactElement;
}

const Tooltip = ({ visible = false, ...restProps }: TooltipProps) => {
  const { title, className, prefixCls, children } = restProps;
  const cls = classNames(prefixCls, className);

  return (
    <Popover theme="dark" className={cls} content={title}>
      {children}
    </Popover>
  );
};

export default Tooltip;
