import React, { CSSProperties } from 'react';
import classnames from 'classnames';

export type TimelineItemProps = {
    dot?: React.ReactNode,
    dotStyle?: CSSProperties,
    prefixCls?: string,
    className?: string,
    style?: CSSProperties,
    children?: React.ReactNode,
} & typeof defaultProps;

const defaultProps = {
    prefixCls: 'ty-timeline-item',
};

const TimelineItem = (props: TimelineItemProps) => {
    const { dot, dotStyle, prefixCls, className, style, children } = props;
    const cls = classnames(prefixCls, className);

    return (
        <li className={cls} style={style}>
            <div className={`${prefixCls}__head`}>
                <div className={`${prefixCls}__dot-container`}>
                    {dot || <span className={`${prefixCls}__dot`} style={dotStyle}/>}
                </div>
            </div>
            <div className={`${prefixCls}__content`}>{children}</div>
        </li>
    );
};

TimelineItem.defaultProps = defaultProps;

export default TimelineItem;
