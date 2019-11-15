import React from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';

export interface CarouselItemProps extends BaseProps {
  children?: React.ReactNode;
}

const CarouselItem = ({ prefixCls = 'ty-carousel-item', ...restProps }: CarouselItemProps) => {
  const { className, style, children } = restProps;
  const cls = classNames(prefixCls, className);

  return (
    <div className={cls} style={style}>
      {children}
    </div>
  );
};

export default CarouselItem;
