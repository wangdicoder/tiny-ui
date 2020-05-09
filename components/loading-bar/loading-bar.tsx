import React, { useContext, useEffect } from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';

export interface LoadingBarProps
  extends BaseProps,
    React.PropsWithoutRef<JSX.IntrinsicElements['div']> {
  didMount?: () => void;
  children?: React.ReactNode;
}

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

export default LoadingBar;
