import React, { useState, useEffect, useContext } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { RadioGroupContext } from './radio-group-context';
import { RadioProps } from './types';

const Radio = React.forwardRef<HTMLLabelElement, RadioProps>(
  (props: RadioProps, ref): React.ReactElement => {
    const {
      defaultChecked = false,
      radioRef,
      name,
      value,
      onChange,
      className,
      children,
      prefixCls: customisedCls,
      ...otherProps
    } = props;
    const configContext = useContext(ConfigContext);
    const radioGroupContext = useContext(RadioGroupContext);
    const initialChecked = 'checked' in props ? (props.checked as boolean) : defaultChecked;
    const [checked, setChecked] = useState<boolean>(
      'value' in radioGroupContext ? radioGroupContext.value === value : initialChecked
    );
    const prefixCls = getPrefixCls('radio', configContext.prefixCls, customisedCls);
    const disabled =
      'disabled' in props
        ? props.disabled
        : 'disabled' in radioGroupContext
        ? radioGroupContext.disabled
        : false;
    const cls = classNames(prefixCls, className, {
      [`${prefixCls}_checked`]: checked,
      [`${prefixCls}_disabled`]: disabled,
    });

    const radioOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
      if (!disabled) {
        !('checked' in props) && setChecked(e.currentTarget.checked);
        onChange && onChange(e);
        radioGroupContext.onChange && radioGroupContext.onChange(e);
      }
    };

    useEffect(() => {
      'value' in radioGroupContext && setChecked(value === radioGroupContext.value);
      'checked' in props && setChecked(props.checked as boolean);
    }, [props, radioGroupContext, value]);

    return (
      <label {...otherProps} ref={ref} className={cls}>
        <input
          ref={radioRef}
          role="radio"
          aria-checked={checked}
          name={radioGroupContext.name || name}
          disabled={disabled}
          value={value}
          className={`${prefixCls}__native`}
          type="radio"
          checked={checked}
          onChange={radioOnChange}
        />
        <span className={`${prefixCls}__inner`} />
        <span>{children}</span>
      </label>
    );
  }
);

Radio.displayName = 'Radio';

export default Radio;
