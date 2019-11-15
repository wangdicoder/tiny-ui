import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';

export interface CheckboxProps extends BaseProps {
  /** Only required when use checkbox group */
  value?: string;
  defaultChecked?: boolean;
  checked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean, event: React.FormEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
}

const Checkbox: React.FC<CheckboxProps> & { Group?: any } = ({
  prefixCls = 'ty-checkbox',
  defaultChecked = false,
  indeterminate = false,
  ...restProps
}: CheckboxProps) => {
  const { value, disabled, onChange, className, style, children } = restProps;
  const [checked, setChecked] = useState(
    'checked' in restProps ? restProps.checked : defaultChecked
  );
  const cls = classNames(prefixCls, className, {
    [`${prefixCls}_indeterminate`]: indeterminate && !checked,
    [`${prefixCls}_checked`]: checked && !indeterminate,
    [`${prefixCls}_disabled`]: disabled,
  });

  const _onChange = (e: React.FormEvent<HTMLInputElement>) => {
    if (!disabled) {
      !('checked' in restProps) && setChecked(e.currentTarget.checked);
      onChange && onChange(e.currentTarget.checked, e);
    }
  };

  useEffect(() => {
    'checked' in restProps && setChecked(restProps.checked!);
  });

  return (
    <label className={cls} style={style}>
      <input
        name={value}
        disabled={disabled}
        className={`${prefixCls}__native`}
        type="checkbox"
        checked={checked}
        onChange={_onChange}
      />
      <span className={`${prefixCls}__inner`} />
      <span>{children}</span>
    </label>
  );
};

export default Checkbox;
