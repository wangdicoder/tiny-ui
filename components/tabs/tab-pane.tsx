import React from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';

export interface TabPaneProps extends BaseProps, React.ComponentProps<'div'> {}

const TabPane = (props: TabPaneProps): React.ReactElement => {
  const { prefixCls, className, children, ...restProps } = props;
  const cls = classNames(prefixCls, className);

  return (
    <div className={cls} {...restProps}>
      {children}
    </div>
  );
};

export default TabPane;
