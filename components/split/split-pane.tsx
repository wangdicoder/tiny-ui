import React, { useEffect } from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';

export interface SplitPaneProps extends BaseProps {
  min?: number;
  getMin?: (min: number) => void;
  children?: React.ReactNode;
}

const SplitPane = ({ prefixCls = 'ty-split-pane', ...restProps }: SplitPaneProps) => {
  const { min, getMin, className, style, children } = restProps;
  const cls = classNames(prefixCls, className);

  useEffect(() => {
    getMin && getMin(min || 40);
  }, []);

  return (
    <div className={cls} style={style}>
      {children}
    </div>
  );
};

export default SplitPane;
