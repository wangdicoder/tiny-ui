import React, { useCallback, useContext, useState } from 'react';
import classNames from 'classnames';
import { Target, getScroll, getNodeScrollHeight, getNodeHeight } from '../_utils/dom';
import { useEventListener } from '../_utils/hooks';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { ScrollIndicatorProps } from './types';

const ScrollIndicator = (props: ScrollIndicatorProps): React.ReactElement => {
  const { prefixCls: customisedCls, fixed = true, target, className, style, ...otherProps } = props;
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('scroll-indicator', configContext.prefixCls, customisedCls);
  const cls = classNames(prefixCls, className, {
    [`${prefixCls}_fixed`]: fixed,
  });
  const [width, setWidth] = useState('0%');

  const handleScroll = useCallback(
    (e: Event) => {
      let container = e.target;
      // If the container is not provided, the target will be the root element. So set it as Window
      // if the container is not determined.
      if (container !== (target && target())) {
        container = window;
      }
      if (container) {
        const el = container as Target;
        const scrollTop = getScroll(el, true);
        const height = getNodeScrollHeight(el) - getNodeHeight(el);
        const scrolled = (scrollTop / height) * 100;
        setWidth(`${scrolled}%`);
      }
    },
    [target]
  );

  const element = target ? (target() ? target() : window) : window;
  useEventListener('scroll', handleScroll, element);

  return <div {...otherProps} className={cls} style={{ ...style, width }} />;
};

ScrollIndicator.displayName = 'ScrollIndicator';

export default ScrollIndicator;
