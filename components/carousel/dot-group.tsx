import React from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';

export type DotPosition = 'top' | 'bottom' | 'left' | 'right';

export interface DotGroupProps extends BaseProps {
  activeIndex: number;
  amount: number;
  position: DotPosition;
  itemOnClick: (index: number) => void;
}

const DotGroup = (props: DotGroupProps) => {
  const { activeIndex, position, amount, itemOnClick, prefixCls } = props;
  return (
    <ul className={`${prefixCls}__dots-container ${prefixCls}_dots-${position}`}>
      {Array(amount)
        .fill(0)
        .map((_, idx) => {
          const dotClassName = classNames(`${prefixCls}__dot`, {
            [`${prefixCls}__dot_active`]: idx === activeIndex,
          });
          return <li key={idx} className={dotClassName} onClick={() => itemOnClick(idx)} />;
        })}
    </ul>
  );
};

export default DotGroup;
