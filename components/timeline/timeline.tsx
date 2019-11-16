import React from 'react';
import classNames from 'classnames';
import { TimelineItemProps } from './timeline-item';
import { BaseProps } from '../_utils/props';

export type TimelinePosition = 'left' | 'center';

export interface TimelineProps extends BaseProps {
  position?: TimelinePosition;
  children: React.ReactElement<TimelineItemProps>;
}

const Timeline: React.FC<TimelineProps> & { Item?: any } = ({
  prefixCls = 'ty-timeline',
  position = 'left',
  ...restProps
}: TimelineProps) => {
  const { className, style, children } = restProps;
  const cls = classNames(prefixCls, className, {
    [`${prefixCls}_${position}`]: position,
  });

  return (
    <ul className={cls} style={style}>
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

export default Timeline;
