import React from 'react';
import classnames from 'classnames';

export type CarouselItemProps = {
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode,
} & typeof defaultProps;

const defaultProps = {
    prefixCls: 'ty-carousel-item',
};

const CarouselItem = (props: CarouselItemProps) => {
    const { prefixCls, className, style, children } = props;
    const cls = classnames(prefixCls, className);

    return (
        <div className={cls} style={style}>
            {children}
        </div>
    );
};

CarouselItem.defaultProps = defaultProps;

export default CarouselItem;
