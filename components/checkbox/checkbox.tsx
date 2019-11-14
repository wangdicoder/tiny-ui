import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
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

const defaultProps = {
  prefixCls: 'ty-checkbox',
  defaultChecked: false,
  indeterminate: false,
} as Partial<CheckboxProps>;

const Checkbox: React.FC<CheckboxProps> & { Group?: any } = (props: CheckboxProps) => {
  const { value, disabled, onChange, indeterminate, prefixCls, className, style, children } = props;
  const [checked, setChecked] = useState('checked' in props ? props.checked : props.defaultChecked);
  const cls = classnames(prefixCls, className, {
    [`${prefixCls}_indeterminate`]: indeterminate && !checked,
    [`${prefixCls}_checked`]: checked && !indeterminate,
    [`${prefixCls}_disabled`]: disabled,
  });

  const _onChange = (e: React.FormEvent<HTMLInputElement>) => {
    if (!disabled) {
      !('checked' in props) && setChecked(e.currentTarget.checked);
      onChange && onChange(e.currentTarget.checked, e);
    }
  };

  useEffect(() => {
    'checked' in props && setChecked(props.checked!);
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

Checkbox.defaultProps = defaultProps;

export default Checkbox;
