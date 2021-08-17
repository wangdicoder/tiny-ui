import React, { CSSProperties, useCallback, useContext, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { StickyProps } from './types';

type StickyMode = {
  top: boolean;
  bottom: boolean;
  offset: number;
}

const Sticky = (props: StickyProps): JSX.Element => {
  const {
    offsetTop,
    offsetBottom,
    container = () => null,
    onChange,
    className,
    style,
    children,
    prefixCls: customisedCls,
    ...otherProps
  } = props;
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('sticky', configContext.prefixCls, customisedCls);
  const [isFixed, setFixed] = useState(false);
  const stickyRef = useRef<HTMLDivElement | null>(null);
  const placeholderRef = useRef<HTMLDivElement | null>(null);
  const prevIsFixed = useRef(false);
  const cls = classNames(prefixCls, className, {
    [`${prefixCls}_fixed`]: isFixed
  });

  const getStickyMode = (): StickyMode => {
    const mode: StickyMode = {
      top: false,
      bottom: false,
      offset: 0,
    };

    if (typeof offsetTop !== 'number' && typeof offsetBottom !== 'number') {
      mode.top = true;
    } else if (typeof offsetTop === 'number') {
      mode.top = true;
      mode.bottom = false;
      mode.offset = offsetTop || 0;
    } else if (typeof offsetBottom === 'number') {
      mode.bottom = true;
      mode.top = false;
      mode.offset = offsetBottom || 0;
    }

    return mode;
  };

  const handleChange = useCallback((fixed: boolean): void => {
    if (prevIsFixed.current === fixed) return;

    prevIsFixed.current = fixed;
    setFixed(fixed);
    onChange && onChange(fixed);
  }, [onChange]);

  useEffect(() => {
    const placeholderEl = placeholderRef.current;
    const stickyEl = stickyRef.current;
    if ((placeholderEl === null) || (stickyEl === null)) return;

    placeholderEl.style.height = `${stickyEl.offsetHeight}px`;

    const io = new IntersectionObserver(entries => {
      const { boundingClientRect, rootBounds } = entries[0]

      if (mode === 'bottom') {
        handleChange(boundingClientRect.bottom > rootBounds.height);
      } else if (mode === 'top') {
        handleChange(boundingClientRect.top < 0);
      }
    }, {
      threshold: [0, 1],
      root: container(),
    });
    io.observe(placeholderEl);

    return () => {
      io.disconnect();
    };
  }, [container, handleChange]);

  return (
    <div aria-hidden ref={placeholderRef}>
      <div ref={stickyRef} className={cls}>
        {typeof children === 'function' ? children(isFixed) : children}
      </div>
    </div>
  );
};

Sticky.displayName = 'Sticky';

export default Sticky;
