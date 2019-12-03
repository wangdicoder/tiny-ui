import React from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';

export interface BreadcrumbItemProps extends BaseProps {
  separator?: React.ReactNode;
  children?: React.ReactNode;
}

const BreadcrumbItem = (props: BreadcrumbItemProps) => {
  const { prefixCls = 'ty-breadcrumb-item', separator, className, style, children } = props;
  const cls = classNames(prefixCls, className);

  return (
    <li className={cls} style={style}>
      {children}
      <span className={`${prefixCls}__separator`}>{separator}</span>
    </li>
  );
};

export default BreadcrumbItem;
