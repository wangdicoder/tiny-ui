import React from 'react';
import classnames from 'classnames';

export type CarouselProps = {
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode,
} & typeof defaultProps;

const defaultProps = {};

const Carousel = (props: CarouselProps) => {
    const { prefixCls, className, style } = props;
    const cls = classnames(prefixCls, className);
    
    return (
        <div className={cls} style={style}>

        </div>
    );
};

Carousel.defaultProps = defaultProps;

export default Carousel;
