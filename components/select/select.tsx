import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';
import Input from '../input/input';
import { SelectOptionsProps } from './option';
import Transition from '../transition';
import { useClickOutside } from '../_utils/hooks';
import { ArrowDown } from '../_utils/components';
import { SelectContext } from './select-context';

export interface SelectProps
  extends BaseProps,
    React.PropsWithoutRef<JSX.IntrinsicElements['div']> {
  value?: string | string[];
  defaultValue?: string | string[];
  placeholder?: string;
  disabled?: boolean;
  defaultOpen?: boolean;
  open?: boolean;
  onDropdownVisibleChange?: (open: boolean) => void;
  dropdownStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const Select = (props: SelectProps): React.ReactElement => {
  const {
    prefixCls = 'ty-select',
    defaultOpen = false,
    disabled = false,
    value,
    defaultValue = '',
    onDropdownVisibleChange,
    placeholder,
    className,
    style,
    children,
    dropdownStyle,
    ...otherProps
  } = props;
  const [isOpenDropdown, setIsOpenDropdown] = useState('open' in props ? props.open : defaultOpen);
  const [selectVal] = useState('value' in props ? value : defaultValue);
  const ref = useRef<HTMLDivElement | null>(null);
  const cls = classNames(prefixCls, className);
  const arrowCls = classNames(`${prefixCls}__arrow`, {
    [`${prefixCls}__arrow_reverse`]: isOpenDropdown,
  });
  useClickOutside(ref, () => {
    if (!('open' in props)) {
      setIsOpenDropdown(false);
      onDropdownVisibleChange && onDropdownVisibleChange(false);
    }
  });

  const inputOnClick = (e: React.MouseEvent<HTMLInputElement>): void => {
    e.preventDefault();
    if (!('open' in props)) {
      setIsOpenDropdown(true);
      onDropdownVisibleChange && onDropdownVisibleChange(true);
    }
  };

  useEffect(() => {
    'open' in props && setIsOpenDropdown(props.open);
  }, [props]);

  return (
    <div {...otherProps} ref={ref} className={cls} style={style}>
      <Input
        disabled={disabled}
        placeholder={placeholder}
        onClick={inputOnClick}
        suffix={
          <span className={arrowCls}>
            <ArrowDown size={10} />
          </span>
        }
      />
      <SelectContext.Provider value={{ value: selectVal }}>
        <Transition in={isOpenDropdown} animation="zoom-in-top">
          <ul className={`${prefixCls}__dropdown`} style={dropdownStyle}>
            {React.Children.map(children, child => {
              const childElement = child as React.FunctionComponentElement<SelectOptionsProps>;
              const { displayName } = childElement.type;
              if (displayName === 'SelectOption' || displayName === 'SelectOptGroup') {
                return React.cloneElement(childElement, childElement.props);
              } else {
                console.warn(
                  'Select has a child that is not neither SelectOption nor SelectOptGroup component.'
                );
                return null;
              }
            })}
          </ul>
        </Transition>
      </SelectContext.Provider>
    </div>
  );
};

Select.displayName = 'Select';

export default Select;
