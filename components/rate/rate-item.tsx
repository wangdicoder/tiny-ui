import React, { ReactNode } from 'react';

type ItemProps = {
  half: boolean;
  color: string;
  value: number;
  prefixCls: string;
  index: number;
  onMouseEnter: (index: number) => void;
  character?: ReactNode;
  onClick: React.MouseEventHandler;
};

const RateItem = (props: ItemProps): React.ReactElement => {
  const { half, color, value, character, prefixCls, index, onMouseEnter, onClick } = props;
  const getColor = (curr: number, max: number): string => {
    const val = half ? curr : Math.round(curr);
    return val <= max ? color : '#e8e8e8';
  };

  return (
    <li className={`${prefixCls}__item`} onClick={onClick}>
      <div
        style={{ color: getColor(index - 0.5, value) }}
        className={`${prefixCls}__item-first`}
        onMouseEnter={(): void => onMouseEnter(index - 0.5)}>
        {character}
      </div>
      <div
        style={{ color: getColor(index, value) }}
        className={`${prefixCls}__item-second`}
        onMouseEnter={(): void => onMouseEnter(index)}>
        {character}
      </div>
    </li>
  );
};

RateItem.displayName = 'RateItem';

export default RateItem;
