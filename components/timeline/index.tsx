import Timeline, { TimelineProps, TimelinePosition } from './timeline';
import TimelineItem, { TimelineItemProps } from './timeline-item';

export { TimelineProps, TimelinePosition, TimelineItemProps };

type ITimeline = typeof Timeline & {
  Item: typeof TimelineItem;
};

const DefaultTimeline = Timeline as ITimeline;
DefaultTimeline.Item = TimelineItem;

export default DefaultTimeline;
