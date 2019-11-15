import React from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';

type ColSpanType = number | string;

export type ColSize = {
  span?: ColSpanType;
  offset?: ColSpanType;
  order?: ColSpanType;
};

export interface ColProps extends BaseProps {
  span?: ColSpanType;
  offset?: ColSpanType;
  order?: ColSpanType;
  xs?: ColSpanType | ColSize;
  sm?: ColSpanType | ColSize;
  md?: ColSpanType | ColSize;
  lg?: ColSpanType | ColSize;
  xl?: ColSpanType | ColSize;
  xxl?: ColSpanType | ColSize;
  children?: React.ReactNode;
  [size: string]: any; // solve index signature
}

const ScreenType = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];

const Col = ({
  prefixCls = 'ty-col',
  span = 24,
  offset = 0,
  order = 0,
  ...restProps
}: ColProps) => {
  const { className, style, children } = restProps;
  let sizeClassObj = {};
  ScreenType.forEach(size => {
    let sizeProps: ColSize = {};
    if (typeof restProps[size] === 'number') {
      sizeProps.span = restProps[size];
    } else if (typeof restProps[size] === 'object') {
      sizeProps = restProps[size] || {};
    }

    sizeClassObj = {
      ...sizeClassObj,
      [`${prefixCls}-${size}-${sizeProps.span}`]: sizeProps.span !== undefined,
      [`${prefixCls}-${size}-order-${sizeProps.order}`]: sizeProps.order || sizeProps.order === 0,
      [`${prefixCls}-${size}-offset-${sizeProps.offset}`]:
        sizeProps.offset || sizeProps.offset === 0,
    };
  });

  const cls = classNames(
    prefixCls,
    className,
    {
      [`${prefixCls}-${span}`]: span,
      [`${prefixCls}-offset-${offset}`]: offset,
      [`${prefixCls}-order-${order}`]: order,
    },
    sizeClassObj
  );

  return (
    <div className={cls} style={style}>
      {children}
    </div>
  );
};

export default Col;
