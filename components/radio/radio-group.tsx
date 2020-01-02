import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
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

const RadioGroup = (props: RadioGroupProps): React.ReactElement => {
  const {
    prefixCls = 'ty-radio-group',
    name,
    onChange,
    disabled,
    className,
    style,
    children,
  } = props;
  const cls = classNames(prefixCls, className);
  const [value, setValue] = useState('value' in props ? props.value : props.defaultValue);

  const _onChange = (checked: boolean, e: React.FormEvent<HTMLInputElement>): void => {
    if (!disabled) {
      !('value' in props) && setValue(e.currentTarget.value);
      onChange && onChange(e.currentTarget.value, e);
    }
  };

  useEffect(() => {
    'value' in props && setValue(props.value!);
  }, [props.value]);

  return (
    <div role="radiogroup" className={cls} style={style}>
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
