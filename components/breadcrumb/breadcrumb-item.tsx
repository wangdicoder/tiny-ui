import React, { useContext } from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';

export interface BreadcrumbItemProps
  extends BaseProps,
    React.PropsWithoutRef<JSX.IntrinsicElements['li']> {
  separator?: React.ReactNode;
  children?: React.ReactNode;
}

const BreadcrumbItem = (props: BreadcrumbItemProps): React.ReactElement => {
  const { separator, className, style, children, prefixCls: customisedCls, ...otherProps } = props;
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('breadcrumb-item', configContext.prefixCls, customisedCls);
  const cls = classNames(prefixCls, className);

  return (
    <li {...otherProps} className={cls} style={style}>
      {children}
      <span className={`${prefixCls}__separator`}>{separator}</span>
    </li>
  );
};

BreadcrumbItem.displayName = 'BreadcrumbItem';

export default BreadcrumbItem;
