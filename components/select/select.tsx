import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';
import Input from '../input/input';
import { SelectOptionsProps } from './option';
import Transition from '../transition';
import { useClickOutside } from '../_utils/hooks';
import { ArrowDown } from '../_utils/components';
import { SelectContext } from './select-context';

type SelectValue = string | string[];

export interface SelectProps
  extends BaseProps,
    Omit<React.PropsWithoutRef<JSX.IntrinsicElements['div']>, 'onSelect'> {
  value?: SelectValue;
  defaultValue?: SelectValue;
  onSelect?: (value: SelectValue) => void;
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
    onSelect,
    ...otherProps
  } = props;
  const [isOpenDropdown, setIsOpenDropdown] = useState('open' in props ? props.open : defaultOpen);
  const [selectVal, setSelectVal] = useState('value' in props ? value : defaultValue);
  const ref = useRef<HTMLDivElement | null>(null);
  const cls = classNames(prefixCls, className);
  const arrowCls = classNames(`${prefixCls}__arrow`, {
    [`${prefixCls}__arrow_reverse`]: isOpenDropdown,
  });
  useClickOutside(ref.current as HTMLDivElement, () => {
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

  const contextValue = {
    value: selectVal,
    onSelect: (value: SelectValue): void => {
      setSelectVal(value);
      setIsOpenDropdown(false);
      onSelect && onSelect(value);
    },
  };

  useEffect(() => {
    'open' in props && setIsOpenDropdown(props.open);
  }, [props]);

  return (
    <div {...otherProps} ref={ref} className={cls} style={style}>
      <Input
        value={Array.isArray(selectVal) ? selectVal[0] : selectVal}
        disabled={disabled}
        placeholder={placeholder}
        onClick={inputOnClick}
        suffix={
          <span className={arrowCls}>
            <ArrowDown size={10} />
          </span>
        }
      />
      <SelectContext.Provider value={contextValue}>
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
