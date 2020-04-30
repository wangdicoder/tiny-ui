import React, { useContext, useState } from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';
import { SelectContext } from './select-context';

export interface SelectOptionsProps
  extends BaseProps,
    React.PropsWithoutRef<JSX.IntrinsicElements['li']> {
  value: string;
  disabled?: boolean;
  children?: React.ReactNode;
}

const SelectOption = (props: SelectOptionsProps): React.ReactElement => {
  const {
    prefixCls = 'ty-select-option',
    disabled = false,
    value,
    className,
    style,
    children,
  } = props;
  const context = useContext(SelectContext);
  const isSelect = context.value === value;
  const [active, setActive] = useState(false);
  const cls = classNames(prefixCls, className, {
    [`${prefixCls}_selected`]: isSelect,
    [`${prefixCls}_active`]: active,
    [`${prefixCls}_disabled`]: disabled,
  });

  const onMouseEnter = (): void => {
    setActive(true);
  };

  const onMouseLeave = (): void => {
    setActive(false);
  };

  const onClick = (): void => {
    !disabled && context.onSelect(value);
  };

  return (
    <li
      key={value}
      className={cls}
      style={style}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      aria-selected={isSelect}
      aria-disabled={disabled}>
      {children}
    </li>
  );
};

SelectOption.displayName = 'SelectOption';

export default SelectOption;
