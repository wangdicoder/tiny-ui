import React, { useRef, useEffect, useState } from 'react';
import classnames from 'classnames';
import Item, { CarouselItemProps } from './carousel-item';

export type CarouselProps = {
    interval?: number,
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties,
    children: React.ReactElement<CarouselItemProps>,
} & typeof defaultProps;

const defaultProps = {
    prefixCls: 'ty-carousel',
    interval: 3000,
};

const Carousel = (props: CarouselProps) => {
    const { interval, prefixCls, className, style, children } = props;
    const cls = classnames(prefixCls, className);
    const containerRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);
    const [translateX, setTranslateX] = useState(0);

    const autoPlay = () => {
        setTranslateX(translateX - width);
        console.log(translateX - 300);
    };

    useEffect(() => {
        if (containerRef.current) {
            setWidth(containerRef.current.getBoundingClientRect().width);
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

Carousel.defaultProps = defaultProps;

Carousel.Item = Item;

export default Carousel;
