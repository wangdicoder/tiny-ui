import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';

export interface RadioProps extends BaseProps {
  name?: string;
  defaultChecked?: boolean;
  checked?: boolean;
  value?: string;
  onChange?: (checked: boolean, event: React.FormEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  children?: React.ReactNode;
}

const Radio: React.FC<RadioProps> & { Group?: any } = ({
  prefixCls = 'ty-radio',
  defaultChecked = false,
  ...restProps
}: RadioProps) => {
  const { name, value, disabled, onChange, className, style, children } = restProps;
  const [checked, setChecked] = useState(
    'checked' in restProps ? restProps.checked : defaultChecked
  );
  const cls = classNames(prefixCls, className, {
    [`${prefixCls}_checked`]: checked,
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
        name={name}
        disabled={disabled}
        value={value}
        className={`${prefixCls}__native`}
        type="radio"
        checked={checked}
        onChange={_onChange}
      />
      <span className={`${prefixCls}__inner`} />
      <span>{children}</span>
    </label>
  );
};

export default Radio;
