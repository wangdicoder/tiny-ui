import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';

export interface TimelineItemProps
  extends BaseProps,
    React.PropsWithoutRef<JSX.IntrinsicElements['li']> {
  dot?: React.ReactNode;
  dotStyle?: CSSProperties;
  children?: React.ReactNode;
}

const TimelineItem = (props: TimelineItemProps): React.ReactElement => {
  const {
    prefixCls = 'ty-timeline-item',
    dot,
    dotStyle,
    className,
    style,
    children,
    ...otherProps
  } = props;
  const cls = classNames(prefixCls, className);

  return (
    <li {...otherProps} className={cls} style={style}>
      <div className={`${prefixCls}__head`}>
        <div className={`${prefixCls}__dot-container`}>
          {dot || <span className={`${prefixCls}__dot`} style={dotStyle} />}
        </div>
      </div>
      <div className={`${prefixCls}__content`}>{children}</div>
    </li>
  );
};

TimelineItem.displayName = 'TimelineItem';

export default TimelineItem;
