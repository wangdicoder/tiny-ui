import React, { useContext, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { useClickOutside } from '../_utils/hooks';
import { ArrowDown } from '../_utils/components';
import { SelectContext } from './select-context';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { SelectOptionsProps, SelectProps, SelectValue } from './types';
import Popup from '../popup';
import Input from '../input/input';

const Select = (props: SelectProps): React.ReactElement => {
  const {
    defaultOpen = false,
    disabled = false,
    defaultValue = '',
    prefixCls: customisedCls,
    value,
    onDropdownVisibleChange,
    placeholder,
    className,
    children,
    dropdownStyle,
    onSelect,
    ...otherProps
  } = props;
  const [isOpenDropdown, setIsOpenDropdown] = useState('open' in props ? props.open : defaultOpen);
  const [selectVal, setSelectVal] = useState('value' in props ? value : defaultValue);
  const ref = useRef<HTMLDivElement | null>(null);
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('select', configContext.prefixCls, customisedCls);
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

  const renderOverlay = (): React.ReactElement => (
    <SelectContext.Provider value={contextValue}>
      <ul className={`${prefixCls}__dropdown`} style={dropdownStyle}>
        {React.Children.map(children, (child) => {
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
    </SelectContext.Provider>
  );

  return (
    <div {...otherProps} ref={ref} className={cls}>
      <Popup
        trigger="manual"
        placement="bottom"
        arrow={false}
        visible={isOpenDropdown}
        content={renderOverlay()}>
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
      </Popup>
    </div>
  );
};

Select.displayName = 'Select';

export default Select;
