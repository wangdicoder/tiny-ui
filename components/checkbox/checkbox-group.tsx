import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import { CheckboxProps } from './index';

export type CheckboxGroupProps = {
  defaultValue?: string[],
  value?: string[],
  onChange?: (value: string[]) => void;
  disabled?: boolean,
  prefixCls?: string,
  className?: string,
  style?: React.CSSProperties,
  children: React.ReactElement<CheckboxProps>,
} & typeof defaultProps;

const defaultProps = {
  prefixCls: 'ty-checkbox-group',
  defaultValue: [],
};

const CheckboxGroup = (props: CheckboxGroupProps) => {
  const { onChange, disabled, prefixCls, className, style, children } = props;
  const cls = classnames(prefixCls, className);
  const [value, setValue] = useState(props.value ? props.value : props.defaultValue);

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
      !('value' in props) && setValue([...value]);
      onChange && onChange(value);
    }
  };

  useEffect(() => {
    ('value' in props) && setValue([...props.value!]);
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

CheckboxGroup.defaultProps = defaultProps;

export default CheckboxGroup;
