import React, { useState, useEffect, useContext } from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';

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

const Checkbox = (props: CheckboxProps): React.ReactElement => {
  const {
    defaultChecked = false,
    indeterminate = false,
    prefixCls: customisedCls,
    value,
    disabled,
    onChange,
    className,
    style,
    children,
  } = props;
  const [checked, setChecked] = useState('checked' in props ? props.checked : defaultChecked);
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('checkbox', configContext.prefixCls, customisedCls);
  const cls = classNames(prefixCls, className, {
    [`${prefixCls}_indeterminate`]: indeterminate && !checked,
    [`${prefixCls}_checked`]: checked && !indeterminate,
    [`${prefixCls}_disabled`]: disabled,
  });

  const _onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    if (!disabled) {
      !('checked' in props) && setChecked(e.currentTarget.checked);
      onChange && onChange(e.currentTarget.checked, e);
    }
  };

  useEffect(() => {
    'checked' in props && setChecked(props.checked);
  }, [props]);

  return (
    <label className={cls} style={style}>
      <input
        role="checkbox"
        aria-checked={checked}
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

Checkbox.displayName = 'Checkbox';

export default Checkbox;
