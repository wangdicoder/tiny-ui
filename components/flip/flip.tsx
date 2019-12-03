import React from 'react';
import classNames from 'classnames';
import warning from '../_utils/warning';
import { BaseProps } from '../_utils/props';
import { FlipItemProps } from './flip-item';

export type FlipDirection = 'horizontal' | 'vertical';

export interface FlipProps extends BaseProps {
  /** A certain parent width and height to prevent the hover empty issue */
  width: string | number;
  height: string | number;
  /** Flip direction */
  direction?: FlipDirection;
  /** Flip from left to right or reverse */
  reverse?: boolean;
  children: React.ReactElement<FlipItemProps>;
}

const Flip: React.FC<FlipProps> & { Item?: any } = (props: FlipProps) => {
  const {
    prefixCls = 'ty-flip',
    direction = 'horizontal',
    reverse = false,
    width,
    height,
    className,
    children,
    style,
  } = props;
  const cls = classNames(prefixCls, className);

  const innerCls = classNames(`${prefixCls}__inner`, {
    [`${prefixCls}__inner_hor`]: direction === 'horizontal' && !reverse,
    [`${prefixCls}__inner_hor_reverse`]: direction === 'horizontal' && reverse,
    [`${prefixCls}__inner_ver`]: direction === 'vertical' && !reverse,
    [`${prefixCls}__inner_ver_reverse`]: direction === 'vertical' && reverse,
  });

  warning(
    !children || React.Children.count(children) !== 2,
    'Children must contain front and back components.',
    true
  );

  return (
    <div className={cls} style={{ width, height, ...style }}>
      <div className={innerCls}>
        {React.Children.map(children, (child, index: number) =>
          React.cloneElement(child, {
            ...child.props,
            className: classNames(
              {
                [`${prefixCls}__item-front`]: index === 0,
                [`${prefixCls}__item-back`]: index === 1,
                [`${prefixCls}__item-back_hor`]:
                  index === 1 && direction === 'horizontal' && !reverse,
                [`${prefixCls}__item-back_hor_reverse`]:
                  index === 1 && direction === 'horizontal' && reverse,
                [`${prefixCls}__item-back_ver`]:
                  index === 1 && direction === 'vertical' && !reverse,
                [`${prefixCls}__item-back_ver_reverse`]:
                  index === 1 && direction === 'vertical' && reverse,
              },
              child.props.className
            ),
          })
        )}
      </div>
    </div>
  );
};

export default Flip;
