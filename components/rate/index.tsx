import React, { useState, useEffect, useContext } from 'react';
import classNames from 'classnames';
import Icon from '../icon';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { RateProps } from './types';
import RateItem from './rate-item';

const Rate = React.forwardRef<HTMLUListElement, RateProps>(
  (props: RateProps, ref): JSX.Element => {
    const {
      color = '#FADB14',
      character = <Icon name="star-fill" size={20} />,
      clearable = true,
      half = false,
      count = 5,
      defaultValue = 0,
      disabled = false,
      onChange,
      className,
      style,
      prefixCls: customisedCls,
      ...otherProps
    } = props;
    const configContext = useContext(ConfigContext);
    const prefixCls = getPrefixCls('rate', configContext.prefixCls, customisedCls);
    const cls = classNames(prefixCls, className);
    const [value, setValue] = useState<number>(
      'value' in props ? (props.value as number) : defaultValue
    );
    // tepValue is for setting the value when the mouse is hovering the bar
    const [tmpValue, setTmpValue] = useState<number>(
      'value' in props ? (props.value as number) : defaultValue
    );

    /**
     * Callback when the mouse enters each star item
     * @param index
     */
    const onMouseEnter = (index: number): void => {
      !disabled && setTmpValue(index);
    };

    const onClick = (): void => {
      if (!disabled && clearable) {
        const val = tmpValue === value ? 0 : tmpValue;
        setTmpValue(val);
        !('value' in props) && setValue(val);
        onChange && onChange(val);
      } else {
        !('value' in props) && setValue(tmpValue);
        onChange && onChange(tmpValue);
      }
    };

    /**
     * When the mouse leaves the rate component
     */
    const onMouseLeave = (): void => {
      setTmpValue(value);
    };

    useEffect(() => {
      'value' in props && setValue(props.value as number);
    }, [props]);

    return (
      <ul {...otherProps} ref={ref} className={cls} style={style} onMouseLeave={onMouseLeave}>
        {Array(count)
          .fill(0)
          .map((_, idx) => (
            <RateItem
              key={idx}
              index={idx + 1}
              half={half}
              character={character}
              prefixCls={prefixCls}
              onMouseEnter={onMouseEnter}
              onClick={onClick}
              value={half ? tmpValue : Math.round(tmpValue)}
              color={color}
            />
          ))}
      </ul>
    );
  }
);

Rate.displayName = 'Rate';

export default Rate;
