import React, { useContext } from 'react';
import classNames from 'classnames';
import Indicator from './indicator';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { LoaderProps } from './types';

const Loader = (props: LoaderProps): JSX.Element => {
  const {
    size = 'md',
    loading = true,
    vertical = false,
    blurred = true,
    indicator,
    tip,
    className,
    children,
    prefixCls: customisedCls,
    ...otherProps
  } = props;
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('loader', configContext.prefixCls, customisedCls);
  const cls = classNames(prefixCls, className, `${prefixCls}_${size}`, {
    [`${prefixCls}_spinning`]: loading,
  });

  const indicatorCls = classNames(`${prefixCls}__loader-container`, {
    [`${prefixCls}__loader-container_vertical`]: vertical,
  });
  const containerCls = classNames(`${prefixCls}__container`, {
    [`${prefixCls}__container_loading`]: loading,
    [`${prefixCls}__container_blurred`]: loading && blurred,
  });

  return (
    <div {...otherProps} className={cls}>
      {loading && (
        <div className={indicatorCls}>
          {indicator ? indicator : <Indicator className={`${prefixCls}__indicator`} size={size} />}
          {tip && <span className={`${prefixCls}__label`}>{tip}</span>}
        </div>
      )}
      {children && <div className={containerCls}>{children}</div>}
    </div>
  );
};

Loader.displayName = 'Loader';

export default Loader;
