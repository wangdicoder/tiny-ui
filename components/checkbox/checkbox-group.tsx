import React, { useState, useEffect, useContext } from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { CheckboxGroupContext } from './checkbox-group-context';

export interface CheckboxGroupProps
  extends BaseProps,
    Omit<React.PropsWithRef<JSX.IntrinsicElements['div']>, 'onChange'> {
  defaultValue?: string[];
  value?: string[];
  onChange?: (checkedValues: string[]) => void;
  disabled?: boolean;
}

const CheckboxGroup = React.forwardRef<HTMLDivElement, CheckboxGroupProps>(
  (props: CheckboxGroupProps, ref): React.ReactElement => {
    const {
      defaultValue = [],
      prefixCls: customisedCls,
      onChange,
      disabled,
      className,
      children,
      ...otherProps
    } = props;
    const configContext = useContext(ConfigContext);
    const prefixCls = getPrefixCls('checkbox-group', configContext.prefixCls, customisedCls);
    const cls = classNames(prefixCls, className);
    const [value, setValue] = useState<string[]>(
      'value' in props ? (props.value as string[]) : defaultValue
    );

    const itemOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
      if (!disabled) {
        const name = e.currentTarget.name;
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
      'value' in props && setValue([...(props.value as string[])]);
    }, [props]);

    return (
      <CheckboxGroupContext.Provider
        value={{
          value,
          disabled,
          onChange: itemOnChange,
        }}>
        <div {...otherProps} ref={ref} role="group" className={cls}>
          {children}
        </div>
      </CheckboxGroupContext.Provider>
    );
  }
);

CheckboxGroup.displayName = 'CheckboxGroup';

export default CheckboxGroup;
