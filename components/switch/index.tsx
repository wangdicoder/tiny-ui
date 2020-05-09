import React, { useState, useEffect, useContext } from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';

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

const Switch = (props: SwitchProps): JSX.Element => {
  const {
    size = 'md',
    defaultChecked = true,
    prefixCls: customisedCls,
    disabled,
    loading,
    onChange,
    checkedText,
    uncheckedText,
    className,
    style,
  } = props;
  const [checked, setChecked] = useState('checked' in props ? props.checked : defaultChecked);
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('switch', configContext.prefixCls, customisedCls);
  const cls = classNames(prefixCls, className, `${prefixCls}_${size}`, {
    [`${prefixCls}_checked`]: checked,
    [`${prefixCls}_loading`]: loading,
    [`${prefixCls}_disabled`]: loading || disabled,
  });

  const onClick = (e: React.MouseEvent<HTMLSpanElement>): void => {
    if (!(disabled || loading)) {
      onChange && onChange(!checked, e);
      !('checked' in props) && setChecked(!checked);
    }
  };

  useEffect(() => {
    'checked' in props && setChecked(props.checked);
  }, [props]);

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
