import React from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';

export interface CarouselItemProps extends React.PropsWithRef<BaseProps> {
  children?: React.ReactNode;
}

const CarouselItem = React.forwardRef<HTMLLIElement, CarouselItemProps>(
  (props: CarouselItemProps, ref) => {
    const { prefixCls = 'ty-carousel-item', className, style, children } = props;
    const cls = classNames(prefixCls, className);
    return (
      <li ref={ref} className={cls} style={style}>
        {children}
      </li>
    );
  }
);

export default CarouselItem;
