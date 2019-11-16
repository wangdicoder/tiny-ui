import React from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';

export interface TooltipProps extends BaseProps {
  children?: React.ReactNode;
}

const Tooltip = (props: TooltipProps) => {
  const { className, prefixCls } = props;
  const cls = classNames(prefixCls, className);

  return <div className={cls}></div>;
};

export default Tooltip;
