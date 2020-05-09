import React, { useContext, useState } from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';
import { SelectContext } from './select-context';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';

export interface SelectOptionsProps
  extends BaseProps,
    React.PropsWithoutRef<JSX.IntrinsicElements['li']> {
  value: string;
  disabled?: boolean;
  children?: React.ReactNode;
}

const SelectOption = (props: SelectOptionsProps): React.ReactElement => {
  const {
    disabled = false,
    prefixCls: customisedCls,
    value,
    className,
    children,
    ...otherProps
  } = props;
  const context = useContext(SelectContext);
  const isSelect = context.value === value;
  const [active, setActive] = useState(false);
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('select-option', configContext.prefixCls, customisedCls);
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
      {...otherProps}
      key={value}
      className={cls}
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
