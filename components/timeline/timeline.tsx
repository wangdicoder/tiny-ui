import React, { useContext } from 'react';
import classNames from 'classnames';
import { TimelineItemProps } from './timeline-item';
import { BaseProps } from '../_utils/props';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';

export type TimelinePosition = 'left' | 'center';

export interface TimelineProps
  extends BaseProps,
    React.PropsWithoutRef<JSX.IntrinsicElements['ul']> {
  position?: TimelinePosition;
  children: React.ReactNode;
}

const Timeline = (props: TimelineProps): React.ReactElement => {
  const { position = 'left', prefixCls: customisedCls, className, children, ...otherProps } = props;
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('timeline', configContext.prefixCls, customisedCls);
  const cls = classNames(prefixCls, className, {
    [`${prefixCls}_${position}`]: position,
  });

  return (
    <ul {...otherProps} className={cls}>
      {React.Children.map(children, (child, idx) => {
        const childElement = child as React.FunctionComponentElement<TimelineItemProps>;
        if (childElement.type.displayName === 'TimelineItem') {
          const childProps: TimelineItemProps = {
            ...childElement.props,
            className:
              position === 'center'
                ? idx % 2 === 0
                  ? `${prefixCls}-item_left`
                  : `${prefixCls}-item_right`
                : childElement.props.className,
          };
          return React.cloneElement(childElement, childProps);
        } else {
          return null;
        }
      })}
    </ul>
  );
};

Timeline.displayName = 'Timeline';

export default Timeline;
