import React, { useContext } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { TimelineItemProps } from './types';

const TimelineItem = (props: TimelineItemProps): React.ReactElement => {
  const { dot, dotStyle, className, children, prefixCls: customisedCls, ...otherProps } = props;
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('timeline-item', configContext.prefixCls, customisedCls);
  const cls = classNames(prefixCls, className);

  return (
    <li {...otherProps} className={cls}>
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
