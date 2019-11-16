import React, { useEffect, useState, MouseEvent } from 'react';
import classNames from 'classnames';
import Icon from '../icon';
import { BaseProps } from '../_utils/props';

export interface InputNumberProps extends BaseProps {
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
  value?: number;
  onChange?: (
    value: number,
    e: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLSpanElement>
  ) => void;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  characterSet?: string;
  /** Determine whether always display the control button  */
  controls?: boolean;
  children?: React.ReactNode;
}

/**
 * Valid the string is a number
 * @param val
 */
const isValid = (val: string | number) => {
  return !isNaN(+val);
};

const InputNumber = ({
  prefixCls = 'ty-input-number',
  size = 'md',
  disabled = false,
  defaultValue = 0,
  step = 1,
  controls = false,
  min = Number.NEGATIVE_INFINITY,
  max = Number.POSITIVE_INFINITY,
  characterSet = '1234567890eE.+-',
  ...restProps
}: InputNumberProps) => {
  const { onChange, className, style } = restProps;
  const cls = classNames(prefixCls, className, `${prefixCls}_${size}`, {
    [`${prefixCls}_disabled`]: disabled,
    [`${prefixCls}_always-controls`]: controls,
  });
  const [value, setValue] = useState(
    'value' in restProps ? `${restProps.value}` : `${defaultValue}`
  );

  const inputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.trim();
    const isValidInput = val.split('').every((ch: string) => characterSet.includes(ch));
    if (isValidInput) {
      !('value' in restProps) && setValue(val);
      // Only the value is a valid number, onChange will be called and return the value.
      onChange && isValid(val) && onChange(Number(val), e);
    }
  };

  /**
   * Correct the number when the input component is on the blur event
   */
  const inputOnBlur = () => {
    if (value.trim().length === 0) {
      return;
    }

    let val = +value;
    if (isValid(val)) {
      if (val > max) {
        val = Number(max);
      } else if (val < min) {
        val = Number(min);
      }

      setValue(`${val}`);
    }
  };

  const plusOnClick = (e: MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation();
    if (!disabled && isValid(step)) {
      const val = +value + +step;
      !('value' in restProps) && setValue(`${val}`);
      onChange && onChange(val, e);
    }
  };

  const minusOnClick = (e: MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation();
    if (!disabled && isValid(step)) {
      const val = +value - +step;
      !('value' in restProps) && setValue(`${val}`);
      onChange && onChange(val, e);
    }
  };

  useEffect(() => {
    'value' in restProps && setValue(`${restProps.value}`);
  }, [restProps.value]);

  return (
    <div className={cls} style={style}>
      <input
        disabled={disabled}
        value={value}
        className={`${prefixCls}__input`}
        max={max}
        min={min}
        step={step}
        onChange={inputOnChange}
        onBlur={inputOnBlur}
      />
      <div className={`${prefixCls}__controls`}>
        <span className={`${prefixCls}__up`} onClick={plusOnClick}>
          <Icon type="up" size={8} color="#999" />
        </span>
        <span className={`${prefixCls}__down`} onClick={minusOnClick}>
          <Icon type="down" size={8} color="#999" />
        </span>
      </div>
    </div>
  );
};

export default InputNumber;
