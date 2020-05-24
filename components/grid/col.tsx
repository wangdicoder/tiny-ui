import React, { useContext } from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';

export type ColSize = {
  span?: number;
  offset?: number;
  order?: number;
};

export interface ColProps extends BaseProps, React.PropsWithoutRef<JSX.IntrinsicElements['div']> {
  span?: number;
  offset?: number;
  order?: number;
  xs?: number | ColSize;
  sm?: number | ColSize;
  md?: number | ColSize;
  lg?: number | ColSize;
  xl?: number | ColSize;
  xxl?: number | ColSize;
  children?: React.ReactNode;
}

const ScreenTypes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];

const Col = (props: ColProps): React.ReactElement => {
  const {
    span = 24,
    offset = 0,
    order = 0,
    prefixCls: customisedCls,
    className,
    style,
    children,
    ...otherProps
  } = props;
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('col', configContext.prefixCls, customisedCls);

  let sizeClassObj = {};
  ScreenTypes.forEach((size) => {
    let sizeProps: ColSize = {};
    // Prevent the error that expression of type 'string' can't be used to index type 'ColProps'.
    const propSize = (props as any)[size];
    if (typeof propSize === 'number') {
      sizeProps.span = propSize;
    } else if (typeof propSize === 'object') {
      sizeProps = propSize || {};
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
    <div {...otherProps} className={cls} style={style}>
      {children}
    </div>
  );
};

Col.displayName = 'Col';

export default Col;
