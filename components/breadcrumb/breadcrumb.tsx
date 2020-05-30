import React, { ReactElement, useContext } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { BreadcrumbItemProps, BreadcrumbProps } from './types';

const Breadcrumb = (props: BreadcrumbProps): React.ReactElement => {
  const { separator = '/', prefixCls: customisedCls, className, style, children } = props;
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('breadcrumb', configContext.prefixCls, customisedCls);
  const cls = classNames(prefixCls, className);

  return (
    <nav className={cls} style={style}>
      <ol className={`${prefixCls}__ol`}>
        {React.Children.map(children, (child: ReactElement<BreadcrumbItemProps>) => {
          const childProps = {
            ...child.props,
            separator,
          };
          return React.cloneElement(child, childProps);
        })}
      </ol>
    </nav>
  );
};

Breadcrumb.displayName = 'Breadcrumb';

export default Breadcrumb;
