import React from 'react';
import classnames from 'classnames';
import TimelineItem, { TimelineItemProps } from './timeline-item';

export type TimelineProps = {
    position?: 'left' | 'center',
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties,
    children: React.ReactElement<TimelineItem>,
} & typeof defaultProps;

const defaultProps = {
    prefixCls: 'ty-timeline',
    position: 'left',
};

const Timeline = (props: TimelineProps) => {
    const { position, prefixCls, className, style, children } = props;
    const cls = classnames(prefixCls, className, {
        [`${prefixCls}_${position}`]: position,
    });

    return (
        <ul className={cls} style={style}>
            {React.Children.map(children, (child, idx) => {
                const childProps: TimelineItemProps = {
                    ...child.props,
                    className: position === 'center' ?
                        (idx % 2 === 0 ? `${child.props.prefixCls}_left` : `${child.props.prefixCls}_right`) :
                        child.props.className,
                };
                return React.cloneElement(child, childProps);
            })}
        </ul>
    );
};

Timeline.defaultProps = defaultProps;

Timeline.Item = TimelineItem;

export default Timeline;
