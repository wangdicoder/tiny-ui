import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { CheckboxProps } from '.';
import { BaseProps } from '../_utils/props';

export interface CheckboxGroupProps extends BaseProps {
  defaultValue?: string[];
  value?: string[];
  onChange?: (value: string[]) => void;
  disabled?: boolean;
  children: React.ReactElement<CheckboxProps>;
}

const CheckboxGroup = ({
  prefixCls = 'ty-checkbox-group',
  defaultValue = [],
  ...restProps
}: CheckboxGroupProps) => {
  const { onChange, disabled, className, style, children } = restProps;
  const cls = classNames(prefixCls, className);
  const [value, setValue] = useState(restProps.value ? restProps.value : defaultValue);

  const _onChange = (checked: boolean, event: React.FormEvent<HTMLInputElement>) => {
    if (!disabled) {
      const name = event.currentTarget.name;
      const idx = value.indexOf(name);
      if (idx > -1) {
        value.splice(idx, 1);
      } else {
        value.push(name);
      }
      // Update state
      !('value' in restProps) && setValue([...value]);
      onChange && onChange(value);
    }
  };

  useEffect(() => {
    'value' in restProps && setValue([...restProps.value!]);
  });

  return (
    <div className={cls} style={style}>
      {React.Children.map(children, child => {
        const childProps = {
          ...child.props,
          disabled: child.props.disabled || disabled,
          checked: child.props.value ? value.includes(child.props.value) : false,
          onChange: _onChange,
        };
        return React.cloneElement(child, childProps);
      })}
    </div>
  );
};

export default CheckboxGroup;
