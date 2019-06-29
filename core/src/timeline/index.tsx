import React from 'react';
import classnames from 'classnames';
import TimelineItem, { TimelineItemProps } from './timeline-item';

export type TimelineProps = {
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties,
    children: React.ReactElement<TimelineItem>,
} & typeof defaultProps;

const defaultProps = {
    prefixCls: 'ty-timeline',
};

const Timeline = (props: TimelineProps) => {
    const { prefixCls, className, style, children } = props;
    const cls = classnames(prefixCls, className);

    return (
        <ul className={cls} style={style}>
            {React.Children.map(children, (child) => {
                const childProps: TimelineItemProps = {
                    ...child.props,
                };
                return React.cloneElement(child, childProps);
            })}
        </ul>
    );
};

Timeline.defaultProps = defaultProps;

Timeline.Item = TimelineItem;

export default Timeline;
