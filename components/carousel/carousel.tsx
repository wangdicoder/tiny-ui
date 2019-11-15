import React, { useRef, useEffect, useState } from 'react';
import classNames from 'classnames';
import { CarouselItemProps } from './carousel-item';
import { BaseProps } from '../_utils/props';

export interface CarouselProps extends BaseProps {
  interval?: number;
  children: React.ReactElement<CarouselItemProps>;
}

const Carousel: React.FC<CarouselProps> & { Item?: any } = ({
  prefixCls = 'ty-carousel',
  interval = 3000,
  ...restProps
}: CarouselProps) => {
  const { className, style, children } = restProps;
  const cls = classNames(prefixCls, className);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  const autoPlay = () => {
    setTranslateX(translateX - width);
    console.log(translateX - 300);
  };

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current!.getBoundingClientRect().width);
    }

    const timerId = setInterval(() => {
      autoPlay();
    }, interval);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div className={cls} style={style}>
      <div className={`${cls}__container`} ref={containerRef}>
        {React.Children.map(children, (child, idx) => {
          const childProps: CarouselItemProps = {
            ...child.props,
            style: { ...child.props.style, transform: `translateX(${translateX + width * idx}px)` },
          };
          return React.cloneElement(child, childProps);
        })}
      </div>
    </div>
  );
};

export default Carousel;
