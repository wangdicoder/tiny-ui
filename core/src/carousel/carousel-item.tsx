import React from 'react';
import classnames from 'classnames';

export type CarouselItemProps = {
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode,
} & typeof defaultProps;

const defaultProps = {};

const CarouselItem = (props: CarouselItemProps) => {
    const { prefixCls, className, style } = props;
    const cls = classnames(prefixCls, className);

    return (
        <div className={cls} style={style}>

        </div>
    );
};

CarouselItem.defaultProps = defaultProps;

export default CarouselItem;
