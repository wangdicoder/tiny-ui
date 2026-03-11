import React, { useContext } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { BreadcrumbItemProps } from './types';

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
