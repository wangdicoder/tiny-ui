import React, { useContext } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { StatisticProps } from './types';

const formatValue = (
  value: number | string | undefined,
  precision?: number,
  groupSeparator?: string
): string => {
  if (value === undefined) return '';
  if (typeof value === 'string') return value;

  let val = precision !== undefined ? value.toFixed(precision) : String(value);

  if (groupSeparator) {
    const parts = val.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, groupSeparator);
    val = parts.join('.');
  }

  return val;
};

const Statistic = React.forwardRef<HTMLDivElement, StatisticProps>((props, ref) => {
  const {
    title,
    value,
    precision,
    prefix,
    suffix,
    groupSeparator = ',',
    valueStyle,
    formatter,
    prefixCls: customisedCls,
    className,
    style,
    ...otherProps
  } = props;

  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('statistic', configContext.prefixCls, customisedCls);
  const cls = classNames(prefixCls, className);

  const renderValue = () => {
    if (formatter) {
      return formatter(value ?? '');
    }
    return formatValue(value, precision, groupSeparator);
  };

  return (
    <div {...otherProps} ref={ref} className={cls} style={style}>
      {title && <div className={`${prefixCls}__title`}>{title}</div>}
      <div className={`${prefixCls}__content`} style={valueStyle}>
        {prefix && <span className={`${prefixCls}__prefix`}>{prefix}</span>}
        <span className={`${prefixCls}__value`}>{renderValue()}</span>
        {suffix && <span className={`${prefixCls}__suffix`}>{suffix}</span>}
      </div>
    </div>
  );
});

Statistic.displayName = 'Statistic';
export default Statistic;
