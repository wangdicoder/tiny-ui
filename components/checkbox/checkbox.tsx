import React, { useState, useEffect, useContext } from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { CheckboxGroupContext } from './checkbox-group-context';

export interface CheckboxProps
  extends BaseProps,
    Omit<React.PropsWithRef<JSX.IntrinsicElements['label']>, 'onChange'> {
  /** Only required when use checkbox group */
  value?: string;
  defaultChecked?: boolean;
  checked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean, event: React.FormEvent<HTMLInputElement>) => void;
  checkboxRef?: React.RefObject<HTMLInputElement>;
}

const Checkbox = React.forwardRef<HTMLLabelElement, CheckboxProps>(
  (props: CheckboxProps, ref): React.ReactElement => {
    const {
      defaultChecked = false,
      indeterminate = false,
      value,
      onChange,
      className,
      children,
      checkboxRef,
      prefixCls: customisedCls,
      ...otherProps
    } = props;
    const configContext = useContext(ConfigContext);
    const checkboxGroupContext = useContext(CheckboxGroupContext);
    const initialChecked = 'checked' in props ? (props.checked as boolean) : defaultChecked;
    const [checked, setChecked] = useState<boolean>(
      'value' in checkboxGroupContext ? checkboxGroupContext.value === value : initialChecked
    );
    const prefixCls = getPrefixCls('checkbox', configContext.prefixCls, customisedCls);
    const disabled =
      'disabled' in props
        ? props.disabled
        : 'disabled' in checkboxGroupContext
        ? checkboxGroupContext.disabled
        : false;
    const cls = classNames(prefixCls, className, {
      [`${prefixCls}_indeterminate`]: indeterminate && !checked,
      [`${prefixCls}_checked`]: checked && !indeterminate,
      [`${prefixCls}_disabled`]: disabled,
    });

    const checkboxOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
      if (!disabled) {
        !props.checked && setChecked(e.currentTarget.checked);
        onChange && onChange(e.currentTarget.checked, e);
        checkboxGroupContext.onChange && checkboxGroupContext.onChange(e);
      }
    };

    useEffect(() => {
      if ('value' in checkboxGroupContext && 'value' in props) {
        setChecked((checkboxGroupContext.value as string[]).includes(value as string));
      }
      'checked' in props && setChecked(props.checked as boolean);
    }, [props, checkboxGroupContext, value]);

    return (
      <label {...otherProps} ref={ref} className={cls}>
        <input
          ref={checkboxRef}
          role="checkbox"
          aria-checked={checked}
          name={value}
          disabled={disabled}
          className={`${prefixCls}__native`}
          type="checkbox"
          checked={checked}
          onChange={checkboxOnChange}
        />
        <span className={`${prefixCls}__inner`} />
        <span>{children}</span>
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
