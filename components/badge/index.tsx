import React, { useContext } from 'react';
import classNames from 'classnames';
import warning from '../_utils/warning';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { BadgeProps } from './types';

const Badge = (props: BadgeProps): JSX.Element => {
  const {
    count,
    color = '#f2453d',
    max = 99,
    dot = false,
    processing = false,
    showZero = false,
    prefixCls: customisedCls,
    title,
    className,
    badgeStyle,
    children,
    ...otherProps
  } = props;
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('badge', configContext.prefixCls, customisedCls);
  const cls = classNames(prefixCls, className, { [`${prefixCls}_no-wrap`]: !children });
  const dotCls = classNames(`${prefixCls}__dot`, { [`${prefixCls}__dot_wave`]: processing });

  warning(!dot && processing, 'only dot badge has the processing effect');

  const renderCount = () => {
    if (typeof count === 'number' || typeof count === 'string') {
      if (count === 0 && !showZero) {
        return null;
      }
      return (
        <sup
          title={title}
          className={`${prefixCls}__count`}
          style={{ backgroundColor: color, ...badgeStyle }}>
          {typeof count === 'number' && count > max ? `${max}+` : count}
        </sup>
      );
    } else {
      return <span className={`${prefixCls}__custom`}>{count}</span>;
    }
  };

  return (
    <span {...otherProps} className={cls}>
      {children}
      {dot ? (
        <sup title={title} className={dotCls} style={{ backgroundColor: color, ...badgeStyle }} />
      ) : (
        renderCount()
      )}
    </span>
  );
};

Badge.displayName = 'Badge';

export default Badge;
