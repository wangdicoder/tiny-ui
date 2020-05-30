import React, { useEffect, useState, MouseEvent, useContext } from 'react';
import classNames from 'classnames';
import Icon from '../icon';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { InputNumberProps } from './types';

/**
 * Valid the string is a number
 * @param val
 */
const isValid = (val: string | number): boolean => {
  return !isNaN(+val);
};

const InputNumber = (props: InputNumberProps): React.ReactElement => {
  const {
    size = 'md',
    disabled = false,
    defaultValue = 0,
    step = 1,
    controls = false,
    min = Number.NEGATIVE_INFINITY,
    max = Number.POSITIVE_INFINITY,
    onChange,
    className,
    prefixCls: customisedCls,
    style,
  } = props;
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('input-number', configContext.prefixCls, customisedCls);
  const inputSize = props.size || configContext.componentSize || size;
  const cls = classNames(prefixCls, className, `${prefixCls}_${inputSize}`, {
    [`${prefixCls}_disabled`]: disabled,
    [`${prefixCls}_always-controls`]: controls,
  });
  const [value, setValue] = useState<number>(
    'value' in props ? (props.value as number) : defaultValue
  );

  const inputOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const val = Number(e.target.value.trim());
    !('value' in props) && setValue(val);
    onChange && isValid(val) && onChange(val, e);
  };

  const plusOnClick = (e: MouseEvent<HTMLSpanElement>): void => {
    e.stopPropagation();
    if (!disabled && isValid(step)) {
      const val = +value + +step;
      if (val <= max) {
        !('value' in props) && setValue(val);
        onChange && onChange(val, e);
      }
    }
  };

  const minusOnClick = (e: MouseEvent<HTMLSpanElement>): void => {
    e.stopPropagation();
    if (!disabled && isValid(step)) {
      const val = +value - +step;
      if (val >= min) {
        !('value' in props) && setValue(val);
        onChange && onChange(val, e);
      }
    }
  };

  useEffect(() => {
    'value' in props && setValue(props.value as number);
  }, [props]);

  return (
    <div className={cls} style={style}>
      <input
        autoComplete="off"
        disabled={disabled}
        value={value}
        type="number"
        className={`${prefixCls}__input`}
        max={max}
        min={min}
        step={step}
        onChange={inputOnChange}
        aria-valuenow={value}
        aria-valuemax={max}
        aria-valuemin={min}
        aria-disabled={disabled}
      />
      <div className={`${prefixCls}__controls`}>
        <span className={`${prefixCls}__up`} onClick={plusOnClick}>
          <Icon name="up" size={8} color="#999" />
        </span>
        <span className={`${prefixCls}__down`} onClick={minusOnClick}>
          <Icon name="down" size={8} color="#999" />
        </span>
      </div>
    </div>
  );
};

export default InputNumber;
