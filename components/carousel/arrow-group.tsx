import React, { MouseEventHandler } from 'react';
import { BaseProps } from '../_utils/props';

export interface ArrowGroup extends BaseProps {
  leftBtnOnClick: MouseEventHandler<HTMLLIElement>;
  rightBtnOnClick: MouseEventHandler<HTMLLIElement>;
}

const ArrowGroup = (props: ArrowGroup) => {
  const { leftBtnOnClick, rightBtnOnClick, prefixCls, style } = props;
  return (
    <ul className={`${prefixCls}__arrow-group`} style={style}>
      <li onClick={leftBtnOnClick} className={`${prefixCls}__arrow-left`}>
        left
      </li>
      <li onClick={rightBtnOnClick} className={`${prefixCls}__arrow-right`}>
        right
      </li>
    </ul>
  );
};

export default ArrowGroup;
