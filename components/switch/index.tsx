import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';

export type SwitchSize = 'sm' | 'md' | 'lg';

export interface SwitchProps extends BaseProps {
  defaultChecked?: boolean;
  checked?: boolean;
  disabled?: boolean;
  loading?: boolean;
  size?: SwitchSize;
  onChange?: (checked: boolean, event: React.MouseEvent) => void;
  checkedText?: React.ReactNode;
  uncheckedText?: React.ReactNode;
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const Switch = (props: SwitchProps): React.ReactElement => {
  const {
    prefixCls = 'ty-switch',
    size = 'md',
    defaultChecked = true,
    disabled,
    loading,
    onChange,
    checkedText,
    uncheckedText,
    className,
    style,
  } = props;
  const [checked, setChecked] = useState('checked' in props ? props.checked : defaultChecked);
  const cls = classNames(prefixCls, className, `${prefixCls}_${size}`, {
    [`${prefixCls}_checked`]: checked,
    [`${prefixCls}_loading`]: loading,
    [`${prefixCls}_disabled`]: loading || disabled,
  });

  const onClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (!(disabled || loading)) {
      onChange && onChange(!checked, e);
      !('checked' in props) && setChecked(!checked);
    }
  };

  useEffect(() => {
    'checked' in props && setChecked(props.checked);
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
