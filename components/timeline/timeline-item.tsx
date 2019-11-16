import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';

export interface TimelineItemProps extends BaseProps {
  dot?: React.ReactNode;
  dotStyle?: CSSProperties;
  children?: React.ReactNode;
}

const TimelineItem = ({ prefixCls = 'ty-timeline-item', ...restProps }: TimelineItemProps) => {
  const { dot, dotStyle, className, style, children } = restProps;
  const cls = classNames(prefixCls, className);

  return (
    <li className={cls} style={style}>
      <div className={`${prefixCls}__head`}>
        <div className={`${prefixCls}__dot-container`}>
          {dot || <span className={`${prefixCls}__dot`} style={dotStyle} />}
        </div>
      </div>
      <div className={`${prefixCls}__content`}>{children}</div>
    </li>
  );
};

export default TimelineItem;
