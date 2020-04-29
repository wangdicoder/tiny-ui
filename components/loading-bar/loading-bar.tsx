import React, { useEffect } from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';

export interface LoadingBarProps extends BaseProps {
  didMount?: () => void;
  children?: React.ReactNode;
}

const LoadingBar = (props: LoadingBarProps): React.ReactElement => {
  const { prefixCls = 'ty-loading-bar', didMount, className, style } = props;
  const cls = classNames(prefixCls, className);

  useEffect(() => {
    didMount && didMount();
  }, []);

  return (
    <div className={cls} style={style}>
      <div id="ty-loading-bar" className={`${prefixCls}__inner`} />
    </div>
  );
};

export default LoadingBar;
