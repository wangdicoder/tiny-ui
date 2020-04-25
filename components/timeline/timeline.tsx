import React from 'react';
import classNames from 'classnames';
import { TimelineItemProps } from './timeline-item';
import { BaseProps } from '../_utils/props';

export type TimelinePosition = 'left' | 'center';

export interface TimelineProps
  extends BaseProps,
    React.PropsWithoutRef<JSX.IntrinsicElements['ul']> {
  position?: TimelinePosition;
  children: React.ReactElement<TimelineItemProps>;
}

const Timeline = (props: TimelineProps): React.ReactElement => {
  const {
    prefixCls = 'ty-timeline',
    position = 'left',
    className,
    style,
    children,
    ...otherProps
  } = props;
  const cls = classNames(prefixCls, className, {
    [`${prefixCls}_${position}`]: position,
  });

  return (
    <ul {...otherProps} className={cls} style={style}>
      {React.Children.map(children, (child, idx) => {
        const childProps: TimelineItemProps = {
          ...child.props,
          className:
            position === 'center'
              ? idx % 2 === 0
                ? `${child.props.prefixCls}_left`
                : `${child.props.prefixCls}_right`
              : child.props.className,
        };
        return React.cloneElement(child, childProps);
      })}
    </ul>
  );
};

Timeline.displayName = 'Timeline';

export default Timeline;
