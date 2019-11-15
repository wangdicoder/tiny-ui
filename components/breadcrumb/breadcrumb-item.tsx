import React from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';

export interface BreadcrumbItemProps extends BaseProps {
  separator?: React.ReactNode;
  children?: React.ReactNode;
}

const BreadcrumbItem = ({
  prefixCls = 'ty-breadcrumb-item',
  ...restProps
}: BreadcrumbItemProps) => {
  const { separator, className, style, children } = restProps;
  const cls = classNames(prefixCls, className);

  return (
    <li className={cls} style={style}>
      {children}
      <span className={`${prefixCls}__separator`}>{separator}</span>
    </li>
  );
};

export default BreadcrumbItem;
