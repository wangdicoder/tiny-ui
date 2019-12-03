import React, { useCallback } from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';

export interface ScrollIndicatorProps extends BaseProps {
  children?: React.ReactNode;
}

const ScrollIndicator = (props: ScrollIndicatorProps): React.ReactElement => {
  const { prefixCls, className, style, children } = props;
  const cls = classNames(prefixCls, className);
  const containerRef = useCallback(el => {
    const io = new IntersectionObserver(
      entries => {
        console.log(entries);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 1,
      }
    );
    io.observe(el);
  }, []);

  return (
    <div className={cls} style={style} ref={containerRef}>
      {children}
    </div>
  );
};

export default ScrollIndicator;
