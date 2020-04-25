import React from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';

export interface LoaderProps extends BaseProps {
  indicator?: React.ReactNode;
  size?: 'sm' | 'default' | 'lg';
  /** loading status */
  loading?: boolean;
  tip?: string;
  vertical?: boolean;
  blurred?: boolean;
  children?: React.ReactNode;
}

const Loader = (props: LoaderProps): React.ReactElement => {
  const {
    prefixCls = 'ty-loader',
    size = 'default',
    loading = true,
    vertical = false,
    blurred = true,
    indicator,
    tip,
    className,
    style,
    children,
  } = props;
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
    <div className={cls} style={style}>
      {loading && (
        <div className={indicatorCls}>
          {indicator ? indicator : <div className={`${prefixCls}__indicator`} />}
          {tip && <span className={`${prefixCls}__label`}>{tip}</span>}
        </div>
      )}
      {children && <div className={containerCls}>{children}</div>}
    </div>
  );
};

export default Loader;
