import React, {
  useRef,
  useEffect,
  useState,
  useCallback,
  useImperativeHandle,
  forwardRef,
  useContext,
} from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { CarouselProps, CarouselRef } from './types';

const Carousel = forwardRef<CarouselRef, CarouselProps>((props, ref) => {
  const {
    dots = true,
    arrows = false,
    autoplay = false,
    autoplaySpeed = 3000,
    dotPlacement = 'bottom',
    effect = 'scrollx',
    easing = 'ease',
    speed = 500,
    infinite = true,
    draggable = false,
    waitForAnimate = false,
    beforeChange,
    afterChange,
    className,
    style,
    children,
    prefixCls: customisedCls,
  } = props;

  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('carousel', configContext.prefixCls, customisedCls);

  const slideCount = React.Children.count(children);
  const slides = React.Children.toArray(children) as React.ReactElement[];

  const trackRef = useRef<HTMLDivElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const animatingRef = useRef(false);

  // Drag state
  const dragStartX = useRef(0);
  const dragDelta = useRef(0);
  const isDragging = useRef(false);

  const isFade = effect === 'fade';

  // ---- Navigate ----
  const goTo = useCallback(
    (index: number, dontAnimate = false) => {
      if (waitForAnimate && animatingRef.current) return;
      if (index === current) return;

      const next = ((index % slideCount) + slideCount) % slideCount;
      beforeChange?.(current, next);

      if (dontAnimate || isFade) {
        setCurrent(next);
        afterChange?.(next);
      } else {
        setIsAnimating(true);
        animatingRef.current = true;
        setCurrent(next);
      }
    },
    [current, slideCount, beforeChange, afterChange, isFade, waitForAnimate]
  );

  const next = useCallback(() => {
    if (!infinite && current >= slideCount - 1) return;
    goTo(current + 1);
  }, [current, slideCount, infinite, goTo]);

  const prev = useCallback(() => {
    if (!infinite && current <= 0) return;
    goTo(current - 1);
  }, [current, infinite, goTo]);

  // ---- Imperative handle ----
  useImperativeHandle(ref, () => ({ goTo, next, prev }), [goTo, next, prev]);

  // ---- Animation end ----
  const handleTransitionEnd = useCallback(() => {
    setIsAnimating(false);
    animatingRef.current = false;
    afterChange?.(current);
  }, [afterChange, current]);

  // ---- Autoplay ----
  useEffect(() => {
    if (!autoplay || slideCount <= 1) return;
    const timer = window.setInterval(next, autoplaySpeed);
    return () => window.clearInterval(timer);
  }, [autoplay, autoplaySpeed, next, slideCount]);

  // ---- Drag ----
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (!draggable) return;
    isDragging.current = true;
    dragDelta.current = 0;
    dragStartX.current = 'touches' in e ? e.touches[0].clientX : e.clientX;
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging.current) return;
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    dragDelta.current = x - dragStartX.current;
  };

  const handleDragEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const containerWidth = outerRef.current?.clientWidth ?? 300;
    const threshold = containerWidth / 4;
    if (dragDelta.current < -threshold) {
      next();
    } else if (dragDelta.current > threshold) {
      prev();
    }
    dragDelta.current = 0;
  };

  // ---- Pause on hover ----
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (!autoplay || !paused) return;
    // Autoplay effect handles timer — paused state is checked via dependency
  }, [autoplay, paused]);

  // Override autoplay to account for pause
  useEffect(() => {
    if (!autoplay || slideCount <= 1 || paused) return;
    const timer = window.setInterval(next, autoplaySpeed);
    return () => window.clearInterval(timer);
  }, [autoplay, autoplaySpeed, next, slideCount, paused]);

  // ---- Dots config ----
  const showDots = dots !== false;
  const dotsClassName = typeof dots === 'object' ? dots.className : undefined;
  const isVerticalDot = dotPlacement === 'left' || dotPlacement === 'right';

  // ---- Class names ----
  const cls = classNames(prefixCls, className, {
    [`${prefixCls}_${effect}`]: true,
    [`${prefixCls}_vertical-dots`]: isVerticalDot,
  });

  // ---- Render scrollx track ----
  const renderScrollxTrack = () => {
    const pct = 100 / slideCount;
    const trackStyle: React.CSSProperties = {
      width: `${slideCount * 100}%`,
      transform: `translate3d(${-current * pct}%, 0, 0)`,
      transition: isAnimating ? `transform ${speed}ms ${easing}` : 'none',
    };

    return (
      <div
        className={`${prefixCls}__track`}
        ref={trackRef}
        style={trackStyle}
        onTransitionEnd={handleTransitionEnd}>
        {slides.map((child, idx) => (
          <div
            key={idx}
            className={`${prefixCls}__slide`}
            style={{ width: `${pct}%` }}
            role="group"
            aria-roledescription="slide"
            aria-label={`Slide ${idx + 1} of ${slideCount}`}
            aria-hidden={idx !== current}>
            {child}
          </div>
        ))}
      </div>
    );
  };

  // ---- Render fade ----
  const renderFadeTrack = () => (
    <div className={`${prefixCls}__track ${prefixCls}__track_fade`}>
      {slides.map((child, idx) => {
        const isActive = idx === current;
        return (
          <div
            key={idx}
            className={classNames(`${prefixCls}__slide`, {
              [`${prefixCls}__slide_active`]: isActive,
            })}
            style={{
              opacity: isActive ? 1 : 0,
              transition: `opacity ${speed}ms ${easing}`,
            }}
            role="group"
            aria-roledescription="slide"
            aria-label={`Slide ${idx + 1} of ${slideCount}`}
            aria-hidden={!isActive}>
            {child}
          </div>
        );
      })}
    </div>
  );

  return (
    <div
      ref={outerRef}
      className={cls}
      style={style}
      role="region"
      aria-roledescription="carousel"
      aria-label="Carousel"
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); }
        if (e.key === 'ArrowRight') { e.preventDefault(); next(); }
      }}
      tabIndex={0}
      onMouseEnter={() => autoplay && setPaused(true)}
      onMouseLeave={() => autoplay && setPaused(false)}
      onMouseDown={handleDragStart}
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onTouchStart={handleDragStart}
      onTouchMove={handleDragMove}
      onTouchEnd={handleDragEnd}>
      <div className={`${prefixCls}__viewport`}>
        {isFade ? renderFadeTrack() : renderScrollxTrack()}
      </div>

      {arrows && slideCount > 1 && (
        <>
          <button
            className={`${prefixCls}__arrow ${prefixCls}__arrow_prev`}
            onClick={prev}
            type="button"
            aria-label="Previous slide">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>
          <button
            className={`${prefixCls}__arrow ${prefixCls}__arrow_next`}
            onClick={next}
            type="button"
            aria-label="Next slide">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
            </svg>
          </button>
        </>
      )}

      {showDots && slideCount > 1 && (
        <ul
          className={classNames(
            `${prefixCls}__dots`,
            `${prefixCls}__dots_${dotPlacement}`,
            dotsClassName
          )}>
          {slides.map((_, idx) => (
            <li
              key={idx}
              className={classNames(`${prefixCls}__dot`, {
                [`${prefixCls}__dot_active`]: idx === current,
              })}>
              <button
                type="button"
                aria-label={`Go to slide ${idx + 1}`}
                aria-current={idx === current ? true : undefined}
                onClick={() => goTo(idx)}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});

Carousel.displayName = 'Carousel';

export default Carousel;
