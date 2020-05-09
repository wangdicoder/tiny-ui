import React from 'react';
import { BaseProps } from '../_utils/props';

export interface TabPaneProps extends Omit<BaseProps, 'prefixCls'>, React.ComponentProps<'div'> {}

const TabPane = (props: TabPaneProps): React.ReactElement => {
  const { className, children, ...restProps } = props;

  return (
    <div className={className} {...restProps}>
      {children}
    </div>
  );
};

export default TabPane;
