import React, { useCallback, useEffect, useState } from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';
import { Target, getScroll, getNodeScrollHeight, getNodeHeight } from '../_utils/dom';

export interface ScrollIndicatorProps extends BaseProps {
  fixed?: boolean;
  container?: () => Target;
}

const ScrollIndicator = (props: ScrollIndicatorProps): React.ReactElement => {
  const { prefixCls = 'ty-scroll-indicator', fixed = true, container, className, style } = props;
  const cls = classNames(prefixCls, className, {
    [`${prefixCls}_fixed`]: fixed,
  });
  const [width, setWidth] = useState('0%');

  const handleScroll = useCallback(
    (e: Event) => {
      let { target } = e;
      // If the container is not provided, the target will be the root element. So set it as Window
      // if the container is not determined.
      if (target !== (container && container())) {
        target = window;
      }
      if (target) {
        const el = target as Target;
        const scrollTop = getScroll(el, true);
        const height = getNodeScrollHeight(el) - getNodeHeight(el);
        const scrolled = (scrollTop / height) * 100;
        setWidth(`${scrolled}%`);
      }
    },
    [container]
  );

  useEffect(() => {
    const target = container ? (container() ? container() : window) : window;
    target.addEventListener('scroll', handleScroll);

    return (): void => {
      target.removeEventListener('scroll', handleScroll);
    };
  }, [container, handleScroll]);

  return <div className={cls} style={{ ...style, width }} />;
};

export default ScrollIndicator;
