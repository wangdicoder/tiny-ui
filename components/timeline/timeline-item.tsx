import React, { CSSProperties, useContext } from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';

export interface TimelineItemProps
  extends BaseProps,
    React.PropsWithoutRef<JSX.IntrinsicElements['li']> {
  dot?: React.ReactNode;
  dotStyle?: CSSProperties;
  children?: React.ReactNode;
}

const TimelineItem = (props: TimelineItemProps): React.ReactElement => {
  const {
    dot,
    dotStyle,
    className,
    style,
    children,
    prefixCls: customisedCls,
    ...otherProps
  } = props;
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('timeline-item', configContext.prefixCls, customisedCls);
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
