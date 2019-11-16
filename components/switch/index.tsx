import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { BaseProps, Size } from '../_utils/props';

export { Size };

export interface SwitchProps extends BaseProps {
  defaultChecked?: boolean;
  checked?: boolean;
  disabled?: boolean;
  loading?: boolean;
  size?: Size;
  onChange?: (checked: boolean, event: React.MouseEvent) => void;
  checkedText?: React.ReactNode;
  uncheckedText?: React.ReactNode;
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const Switch = ({
  prefixCls = 'ty-switch',
  size = 'md',
  defaultChecked = true,
  ...restProps
}: SwitchProps) => {
  const { disabled, loading, onChange, checkedText, uncheckedText, className, style } = restProps;
  const [checked, setChecked] = useState(
    'checked' in restProps ? restProps.checked : defaultChecked
  );
  const cls = classNames(prefixCls, className, `${prefixCls}_${size}`, {
    [`${prefixCls}_checked`]: checked,
    [`${prefixCls}_loading`]: loading,
    [`${prefixCls}_disabled`]: loading || disabled,
  });

  const onClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (!(disabled || loading)) {
      onChange && onChange(!checked, e);
      !('checked' in restProps) && setChecked(!checked);
    }
  };

  useEffect(() => {
    'checked' in restProps && setChecked(restProps.checked);
  });

  return (
    <label className={cls} style={style} onClick={onClick}>
      <span className={`${prefixCls}__bg`}>
        <span className={`${prefixCls}__thumb`} />
        <span className={`${prefixCls}__label`}>{checked ? checkedText : uncheckedText}</span>
      </span>
    </label>
  );
};

export default Switch;
