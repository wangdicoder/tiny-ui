import React, { useContext, useEffect } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { LoadingBarProps } from './types';

const LoadingBar = (props: LoadingBarProps): React.ReactElement => {
  const { didMount, className, prefixCls: customisedCls, ...otherProps } = props;
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('loading-bar', configContext.prefixCls, customisedCls);
  const cls = classNames(prefixCls, className);

  useEffect(() => {
    didMount && didMount();
  }, [didMount]);

  return (
    <div {...otherProps} className={cls}>
      <div id="ty-loading-bar" className={`${prefixCls}__inner`} />
    </div>
  );
};

LoadingBar.displayName = 'LoadingBar';

export default LoadingBar;
