import { MouseEventHandler } from 'react';
import { BaseProps } from '../_utils/props';

export interface ArrowGroupProps extends BaseProps {
  leftBtnOnClick: MouseEventHandler<HTMLLIElement>;
  rightBtnOnClick: MouseEventHandler<HTMLLIElement>;
}

const ChevronLeft = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
  </svg>
);

const ChevronRight = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
  </svg>
);

const ArrowGroup = (props: ArrowGroupProps) => {
  const { leftBtnOnClick, rightBtnOnClick, prefixCls, style } = props;
  return (
    <ul className={`${prefixCls}__arrow-group`} style={style}>
      <li onClick={leftBtnOnClick} className={`${prefixCls}__arrow-left`}>
        <ChevronLeft />
      </li>
      <li onClick={rightBtnOnClick} className={`${prefixCls}__arrow-right`}>
        <ChevronRight />
      </li>
    </ul>
  );
};

export default ArrowGroup;
