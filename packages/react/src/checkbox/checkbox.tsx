import React, { useState, useEffect, useContext } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { CheckboxGroupContext } from './checkbox-group-context';
import { CheckboxProps } from './types';

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
    const disabled: boolean =
      'disabled' in props
        ? (props.disabled as boolean)
        : 'disabled' in checkboxGroupContext
        ? (checkboxGroupContext.disabled as boolean)
        : false;
    const cls = classNames(prefixCls, className, {
      [`${prefixCls}_indeterminate`]: indeterminate,
      [`${prefixCls}_checked`]: checked && !indeterminate,
      [`${prefixCls}_disabled`]: disabled,
    });

    const checkboxOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
      if (!disabled) {
        !('checked' in props) && setChecked(e.currentTarget.checked);
        onChange && onChange(e);
        checkboxGroupContext.onChange && checkboxGroupContext.onChange(e);
      }
    };

    useEffect(() => {
      if ('value' in checkboxGroupContext && typeof checkboxGroupContext.value !== 'undefined' && 'value' in props ) {
        setChecked((checkboxGroupContext.value).includes(value as string));
      }
      'checked' in props && typeof props.checked !== 'undefined' && setChecked(props.checked);
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
