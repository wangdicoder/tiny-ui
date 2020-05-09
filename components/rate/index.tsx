import React, { useState, useEffect, ReactNode, useContext } from 'react';
import classNames from 'classnames';
import Icon from '../icon';
import { BaseProps } from '../_utils/props';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';

export interface RateProps extends BaseProps {
  color?: string;
  clearable?: boolean;
  half?: boolean;
  character?: ReactNode;
  count?: number;
  defaultValue?: number;
  value?: number;
  disabled?: boolean;
  onChange?: (value: number) => void;
  children?: ReactNode;
}

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

const Item = (props: ItemProps): React.ReactElement => {
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

const Rate = ({
  color = '#FADB14',
  character = <Icon name="star-fill" size={20} />,
  clearable = true,
  half = false,
  count = 5,
  defaultValue = 0,
  disabled = false,
  prefixCls: customisedCls,
  ...restProps
}: RateProps): JSX.Element => {
  const { onChange, className, style } = restProps;
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('rate', configContext.prefixCls, customisedCls);
  const cls = classNames(prefixCls, className);
  const [value, setValue] = useState('value' in restProps ? restProps.value : defaultValue);
  // tepValue is for setting the value when the mouse is hovering the bar
  const [tmpValue, setTmpValue] = useState('value' in restProps ? restProps.value : defaultValue);

  /**
   * Callback when the mouse enters each star item
   * @param index
   */
  const onMouseEnter = (index: number): void => {
    !disabled && setTmpValue(index);
  };

  const onClick = (e: React.MouseEvent): void => {
    if (!disabled && clearable) {
      const val = tmpValue === value ? 0 : tmpValue;
      setTmpValue(val);
      !('value' in restProps) && setValue(val);
      onChange && onChange(val!);
    } else {
      !('value' in restProps) && setValue(tmpValue);
      onChange && onChange(tmpValue!);
    }
  };

  /**
   * When the mouse leaves the rate component
   */
  const onMouseLeave = (): void => {
    setTmpValue(value);
  };

  useEffect(() => {
    'value' in restProps && setValue(restProps.value);
  });

  return (
    <ul className={cls} style={style} onMouseLeave={onMouseLeave}>
      {Array(count)
        .fill(0)
        .map((_, idx) => (
          <Item
            key={idx}
            index={idx + 1}
            half={half}
            character={character}
            prefixCls={prefixCls}
            onMouseEnter={onMouseEnter}
            onClick={onClick}
            value={half ? tmpValue! : Math.round(tmpValue!)}
            color={color}
          />
        ))}
    </ul>
  );
};

export default Rate;
