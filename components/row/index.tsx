import React from 'react';
import classNames from 'classnames';
import { ColProps } from '../col';
import { BaseProps } from '../_utils/props';

export type RowAlign = 'top' | 'center' | 'bottom' | 'baseline';
export type RowJustify =
  | 'start'
  | 'end'
  | 'center'
  | 'space-around'
  | 'space-between'
  | 'space-evenly';

export interface RowProps extends BaseProps {
  gutter?: number;
  /** gutter padding includes first and end child  */
  gutterSide?: boolean;
  align?: RowAlign;
  justify?: RowJustify;
  children: React.ReactElement<ColProps>;
}

const Row = (props: RowProps) => {
  const {
    prefixCls = 'ty-row',
    gutter = 0,
    gutterSide = false,
    align,
    justify,
    className,
    style,
    children,
  } = props;
  const cls = classNames(prefixCls, className, {
    [`${prefixCls}_align-${align}`]: align,
    [`${prefixCls}_justify-${justify}`]: justify,
  });

  return (
    <div className={cls} style={style}>
      {React.Children.map(children, (child: React.ReactElement<ColProps>, index: number) => {
        const gutterStyle = gutter
          ? {
              paddingLeft: !gutterSide && index === 0 ? 0 : gutter / 2, // first child left padding
              paddingRight:
                !gutterSide && index === React.Children.count(children) - 1 ? 0 : gutter / 2,
            }
          : {};
        return React.cloneElement(child, {
          ...child.props,
          style: {
            ...child.props.style,
            ...gutterStyle,
          },
        });
      })}
    </div>
  );
};

export default Row;
