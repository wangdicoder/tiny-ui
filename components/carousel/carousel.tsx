import React, { useRef, useEffect, useState, useCallback } from 'react';
import classNames from 'classnames';
import { CarouselItemProps } from './carousel-item';
import { BaseProps } from '../_utils/props';
import DotGroup, { DotPosition } from './dot-group';
import ArrowGroup from './arrow-group';

export type EasingType = 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out';

export interface CarouselProps extends BaseProps {
  dots?: boolean;
  arrows?: boolean;
  autoplay?: boolean;
  interval?: number;
  animatedDuration?: number;
  dotPosition?: DotPosition;
  easing?: EasingType;
  beforeChange?: () => void;
  afterChange?: () => void;
  children: React.ReactElement<CarouselItemProps>[];
}

const Carousel: React.FC<CarouselProps> & { Item?: any } = (props: CarouselProps) => {
  const {
    prefixCls = 'ty-carousel',
    dots = true,
    arrows = true,
    interval = 3000,
    animatedDuration = 500,
    autoplay = true,
    dotPosition = 'bottom',
    easing = 'linear',
    className,
    style,
    children,
  } = props;
  const cls = classNames(prefixCls, className);
  const outerRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLUListElement | null>(null);
  const [width, setWidth] = useState(0);
  const currIndexRef = useRef(0);
  const [displayIndex, setDisplayIndex] = useState(0);

  const animate = useCallback((distance: number, isAnimated = true) => {
    if (containerRef.current) {
      const container = containerRef.current;
      container.style.transitionDuration = isAnimated ? `${animatedDuration}ms` : '0s';
      container.style.left = parseInt(container.style.left!, 10) + distance + 'px';
    }
  }, [animatedDuration]);

  const moveNext = useCallback((): void => {
    const nextIndex = currIndexRef.current + 1;
    currIndexRef.current = nextIndex;
    setDisplayIndex(nextIndex >= children.length ? 0 : nextIndex);
    animate(-width);
    if (nextIndex === children.length) {
      currIndexRef.current = 0;
      window.setTimeout(() => {
        const distance = children.length * width;
        animate(distance, false);
      }, animatedDuration);
    }
  }, [width, children.length, animate, animatedDuration]);

  const movePrev = useCallback((): void => {
    const prevIndex = currIndexRef.current - 1;
    currIndexRef.current = prevIndex;
    setDisplayIndex(prevIndex < 0 ? children.length - 1 : prevIndex);
    animate(width);
    if (prevIndex === -1) {
      currIndexRef.current = children.length - 1;
      window.setTimeout(() => {
        const distance = children.length * width;
        animate(-distance, false);
      }, animatedDuration);
    }
  }, [width, children.length, animate, animatedDuration]);

  const dotItemOnClick = (index: number): void => {
    const current = currIndexRef.current;
    currIndexRef.current = index;
    setDisplayIndex(index);
    animate(width * Math.abs(index - current) * (index > current ? -1 : 1));
  };

  const getChildrenList = () => {
    const finalChildren = [];
    finalChildren.push(children[children.length - 1]);
    React.Children.forEach(children, (child: React.ReactElement<CarouselItemProps>) => {
      finalChildren.push(child);
    });
    finalChildren.push(children[0]);
    return finalChildren;
  };

  useEffect(() => {
    if (outerRef.current && containerRef.current) {
      const outerWidth = outerRef.current.clientWidth;
      setWidth(outerWidth);
      containerRef.current.style.left = `${-outerWidth}px`;
    }
  }, []);

  useEffect(() => {
    if (!autoplay || width <= 0) return;

    const timer = window.setInterval(() => {
      moveNext();
    }, interval);

    return (): void => {
      window.clearInterval(timer);
    };
  }, [autoplay, interval, moveNext, width]);

  return (
    <div ref={outerRef} className={cls} style={style}>
      <ul
        ref={containerRef}
        className={`${cls}__container`}
        style={{
          transitionTimingFunction: easing,
          width: width * (children.length + 2),
        }}>
        {getChildrenList().map((child: React.ReactElement<CarouselItemProps>, index) => {
          const childProps = {
            key: index,
            ...child.props,
            style: {
              width,
              ...child.props.style,
            },
          };
          return React.cloneElement(child, childProps);
        })}
      </ul>
      {arrows && (
        <ArrowGroup
          leftBtnOnClick={movePrev}
          rightBtnOnClick={moveNext}
          prefixCls={prefixCls}
          style={{ width }}
        />
      )}
      {dots && (
        <DotGroup
          activeIndex={displayIndex}
          position={dotPosition}
          amount={children.length}
          itemOnClick={dotItemOnClick}
          prefixCls={prefixCls}
        />
      )}
    </div>
  );
};

export default Carousel;
