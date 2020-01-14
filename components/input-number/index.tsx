import React, { useEffect, useState, MouseEvent } from 'react';
import classNames from 'classnames';
import Icon from '../icon';
import { BaseProps } from '../_utils/props';

export interface InputNumberProps extends BaseProps {
  min?: number;
  max?: number;
  step?: number;
  precision?: number;
  defaultValue?: number;
  value?: number;
  onChange?: (
    value: number,
    e: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLSpanElement>
  ) => void;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  /** Determine whether always display the control button  */
  controls?: boolean;
  children?: React.ReactNode;
}

/**
 * Valid the string is a number
 * @param val
 */
const isValid = (val: string | number): boolean => {
  return !isNaN(+val);
};

const InputNumber = (props: InputNumberProps): React.ReactElement => {
  const {
    prefixCls = 'ty-input-number',
    size = 'md',
    disabled = false,
    defaultValue = 0,
    step = 1,
    controls = false,
    min = Number.NEGATIVE_INFINITY,
    max = Number.POSITIVE_INFINITY,
    onChange,
    className,
    style,
  } = props;
  const cls = classNames(prefixCls, className, `${prefixCls}_${size}`, {
    [`${prefixCls}_disabled`]: disabled,
    [`${prefixCls}_always-controls`]: controls,
  });
  const [value, setValue] = useState<number>('value' in props ? props.value! : defaultValue);

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
    'value' in props && setValue(props.value!);
  }, [props.value]);

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
