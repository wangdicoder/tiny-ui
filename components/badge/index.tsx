import React from 'react';
import classNames from 'classnames';
import warning from '../_utils/warning';
import { BaseProps } from '../_utils/props';

export interface BadgeProps
  extends BaseProps,
    React.PropsWithoutRef<JSX.IntrinsicElements['span']> {
  count?: React.ReactNode | number;
  color?: string;
  max?: number;
  dot?: boolean;
  processing?: boolean;
  /** when value is equal to zero, the badge will be hidden by default */
  showZero?: boolean;
  text?: string | undefined;
  title?: string;
  badgeStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const Badge = (props: BadgeProps): React.ReactElement => {
  const {
    count = 0,
    prefixCls = 'ty-badge',
    color = '#f2453d',
    max = 99,
    dot = false,
    processing = false,
    showZero = false,
    text = undefined,
    title,
    className,
    style,
    badgeStyle,
    children,
    ...otherProps
  } = props;
  const cls = classNames(prefixCls, className, { [`${prefixCls}_no-wrap`]: !children });

  const dotCls = classNames(`${prefixCls}__dot`, { [`${prefixCls}__dot_wave`]: processing });

  warning(!dot && processing, 'only dot badge has the processing effect');

  const renderCount = () => {
    const isZero = typeof count === 'number' && count === 0;
    if (isZero && !showZero) {
      return null;
    }

    if (typeof count === 'number') {
      return (
        <sup
          title={title}
          className={`${prefixCls}__count`}
          style={{ backgroundColor: color, ...badgeStyle }}>
          {text || (count > max ? `${max}+` : count)}
        </sup>
      );
    } else {
      return <span className={`${prefixCls}__custom`}>{count}</span>;
    }
  };

  return (
    <span {...otherProps} className={cls} style={style}>
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
