import React, { useState, useEffect, useContext } from 'react';
import classNames from 'classnames';
import { CheckboxProps } from '.';
import { BaseProps } from '../_utils/props';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';

export interface CheckboxGroupProps extends BaseProps {
  defaultValue?: string[];
  value?: string[];
  onChange?: (value: string[]) => void;
  disabled?: boolean;
  children: React.ReactElement<CheckboxProps>;
}

const CheckboxGroup = (props: CheckboxGroupProps): React.ReactElement => {
  const {
    defaultValue = [],
    prefixCls: customisedCls,
    onChange,
    disabled,
    className,
    style,
    children,
  } = props;
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('checkbox-group', configContext.prefixCls, customisedCls);
  const cls = classNames(prefixCls, className);
  const [value, setValue] = useState(props.value ? props.value : defaultValue);

  const itemOnChange = (checked: boolean, event: React.FormEvent<HTMLInputElement>): void => {
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
    'value' in props && setValue([...props.value!]);
  }, [props]);

  return (
    <div role="group" className={cls} style={style}>
      {React.Children.map(children, (child) => {
        const childProps = {
          ...child.props,
          disabled: child.props.disabled || disabled,
          checked: child.props.value ? value.includes(child.props.value) : false,
          onChange: itemOnChange,
        };
        return React.cloneElement(child, childProps);
      })}
    </div>
  );
};

CheckboxGroup.displayName = 'CheckboxGroup';

export default CheckboxGroup;
