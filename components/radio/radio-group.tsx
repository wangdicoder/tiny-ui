import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import { RadioProps } from './index';
import { BaseProps } from '../_utils/props';

export interface RadioGroupProps extends BaseProps {
  name?: string;
  defaultValue?: string;
  value?: string;
  onChange?: (value: string, event: React.FormEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  children: React.ReactElement<RadioProps>;
}

const RadioGroup = ({ prefixCls = 'ty-radio-group', ...restProps }: RadioGroupProps) => {
  const { name, onChange, disabled, className, style, children } = restProps;
  const cls = classnames(prefixCls, className);
  const [value, setValue] = useState(
    'value' in restProps ? restProps.value : restProps.defaultValue
  );

  const _onChange = (checked: boolean, e: React.FormEvent<HTMLInputElement>) => {
    if (!disabled) {
      !('value' in restProps) && setValue(e.currentTarget.value);
      onChange && onChange(e.currentTarget.value, e);
    }
  };

  useEffect(() => {
    'value' in restProps && setValue(restProps.value!);
  });

  return (
    <div className={cls} style={style}>
      {React.Children.map(children, child => {
        const childProps = {
          ...child.props,
          name,
          disabled: child.props.disabled || disabled,
          checked: value === child.props.value,
          onChange: _onChange,
        };
        return React.cloneElement(child, childProps);
      })}
    </div>
  );
};

export default RadioGroup;
