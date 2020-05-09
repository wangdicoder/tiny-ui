import React, { useState, useEffect, useContext } from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';

export interface RadioProps extends BaseProps {
  name?: string;
  defaultChecked?: boolean;
  checked?: boolean;
  value?: string;
  onChange?: (checked: boolean, event: React.FormEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  children?: React.ReactNode;
}

const Radio = (props: RadioProps): React.ReactElement => {
  const {
    defaultChecked = false,
    prefixCls: customisedCls,
    name,
    value,
    disabled,
    onChange,
    className,
    style,
    children,
  } = props;
  const [checked, setChecked] = useState('checked' in props ? props.checked : defaultChecked);
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('radio', configContext.prefixCls, customisedCls);
  const cls = classNames(prefixCls, className, {
    [`${prefixCls}_checked`]: checked,
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
  }, [props.checked]);

  return (
    <label className={cls} style={style}>
      <input
        role="radio"
        aria-checked={checked}
        name={name}
        disabled={disabled}
        value={value}
        className={`${prefixCls}__native`}
        type="radio"
        checked={checked}
        onChange={_onChange}
      />
      <span className={`${prefixCls}__inner`} />
      <span>{children}</span>
    </label>
  );
};

Radio.displayName = 'Radio';

export default Radio;
