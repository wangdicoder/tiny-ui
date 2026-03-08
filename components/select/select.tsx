import React, { useContext, useEffect, useId, useRef, useState, useCallback, useMemo } from 'react';
import classNames from 'classnames';
import { useClickOutside } from '../_utils/hooks';
import { ArrowDown, Close, CloseCircle, LoadingCircle, Check } from '../_utils/components';
import { SelectContext } from './select-context';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { SelectOptionItem, SelectOptionsProps, SelectProps, SelectValue } from './types';
import Popup from '../popup';

const Select = (props: SelectProps): React.ReactElement => {
  const {
    defaultOpen = false,
    disabled = false,
    defaultValue,
    prefixCls: customisedCls,
    value,
    mode,
    showSearch = false,
    filterOption = true,
    onSearch,
    allowClear = false,
    loading = false,
    size,
    maxTagCount,
    notFoundContent,
    options: optionsProp,
    onChange,
    onSelect,
    onDropdownVisibleChange,
    optionRender,
    labelRender,
    placeholder,
    className,
    children,
    dropdownStyle,
    ...otherProps
  } = props;

  const isMultiple = mode === 'multiple' || mode === 'tags';
  const defaultVal = defaultValue ?? (isMultiple ? [] : '');

  const [isOpenDropdown, setIsOpenDropdown] = useState('open' in props ? props.open : defaultOpen);
  const [selectVal, setSelectVal] = useState<SelectValue>(
    'value' in props ? (value as SelectValue) : defaultVal
  );
  const [searchValue, setSearchValue] = useState('');
  const [focusedIndex, setFocusedIndex] = useState(-1);

  const ref = useRef<HTMLDivElement | null>(null);
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const listboxId = useId();

  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('select', configContext.prefixCls, customisedCls);
  const selectSize = size || configContext.componentSize || 'md';

  const hasSomeValue = isMultiple
    ? Array.isArray(selectVal) && selectVal.length > 0
    : selectVal !== '' && selectVal !== undefined;

  const cls = classNames(prefixCls, className, `${prefixCls}_${selectSize}`, {
    [`${prefixCls}_disabled`]: disabled,
    [`${prefixCls}_open`]: isOpenDropdown,
    [`${prefixCls}_multiple`]: isMultiple,
    [`${prefixCls}_showSearch`]: showSearch,
    [`${prefixCls}_has-value`]: allowClear && hasSomeValue && !disabled,
  });

  const arrowCls = classNames(`${prefixCls}__arrow`, {
    [`${prefixCls}__arrow_reverse`]: isOpenDropdown,
  });

  useClickOutside(ref.current as HTMLDivElement, () => {
    if (!('open' in props)) {
      setIsOpenDropdown(false);
      onDropdownVisibleChange?.(false);
    }
    setSearchValue('');
  });

  // Build flat option list from children or options prop
  const flatOptions = useMemo((): SelectOptionItem[] => {
    if (optionsProp) return optionsProp;
    const result: SelectOptionItem[] = [];
    const extractFromChildren = (nodes: React.ReactNode): void => {
      React.Children.forEach(nodes, (child) => {
        const el = child as React.FunctionComponentElement<SelectOptionsProps>;
        if (!el?.type) return;
        if (el.type.displayName === 'SelectOption') {
          result.push({
            value: el.props.value,
            label: el.props.label ?? el.props.children,
            disabled: !!el.props.disabled,
          });
        } else if (el.type.displayName === 'SelectOptGroup') {
          extractFromChildren(el.props.children);
        }
      });
    };
    extractFromChildren(children);
    return result;
  }, [optionsProp, children]);

  // Filter logic
  const matchesFilter = useCallback(
    (opt: SelectOptionItem): boolean => {
      if (!searchValue) return true;
      if (filterOption === false) return true;
      if (typeof filterOption === 'function') return filterOption(searchValue, opt);
      const label = typeof opt.label === 'string' ? opt.label : String(opt.value);
      return label.toLowerCase().includes(searchValue.toLowerCase());
    },
    [searchValue, filterOption]
  );

  const filteredOptions = useMemo(
    () => flatOptions.filter(matchesFilter),
    [flatOptions, matchesFilter]
  );

  // Get display label for a value
  const getLabelForValue = useCallback(
    (val: string): React.ReactNode => {
      const opt = flatOptions.find((o) => o.value === val);
      const label = opt?.label ?? val;
      if (labelRender && opt) {
        return labelRender({ label, value: val });
      }
      return label;
    },
    [flatOptions, labelRender]
  );

  // Open/close helpers
  const openDropdown = (): void => {
    if (!('open' in props)) {
      setIsOpenDropdown(true);
      onDropdownVisibleChange?.(true);
    }
  };

  const closeDropdown = (): void => {
    if (!('open' in props)) {
      setIsOpenDropdown(false);
      onDropdownVisibleChange?.(false);
    }
    setSearchValue('');
  };

  // Handle option select
  const handleSelect = useCallback(
    (optValue: string): void => {
      if (isMultiple) {
        const arr = Array.isArray(selectVal) ? selectVal : [];
        let newVal: string[];
        if (arr.includes(optValue)) {
          newVal = arr.filter((v) => v !== optValue);
        } else {
          newVal = [...arr, optValue];
        }
        if (!('value' in props)) {
          setSelectVal(newVal);
        }
        const opt = flatOptions.find((o) => o.value === optValue);
        onChange?.(newVal, flatOptions.filter((o) => newVal.includes(o.value)));
        onSelect?.(newVal);
        if (opt) {
          // Keep dropdown open in multi-select mode
        }
        setSearchValue('');
      } else {
        if (!('value' in props)) {
          setSelectVal(optValue);
        }
        const opt = flatOptions.find((o) => o.value === optValue);
        onChange?.(optValue, opt);
        onSelect?.(optValue);
        closeDropdown();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isMultiple, selectVal, flatOptions, onChange, onSelect, props]
  );

  // Remove tag
  const handleRemoveTag = (val: string, e: React.MouseEvent): void => {
    e.stopPropagation();
    if (disabled) return;
    const arr = Array.isArray(selectVal) ? selectVal : [];
    const newVal = arr.filter((v) => v !== val);
    if (!('value' in props)) {
      setSelectVal(newVal);
    }
    onChange?.(newVal, flatOptions.filter((o) => newVal.includes(o.value)));
    onSelect?.(newVal);
  };

  // Clear all
  const handleClear = (e: React.MouseEvent): void => {
    e.stopPropagation();
    if (disabled) return;
    const newVal = isMultiple ? [] : '';
    if (!('value' in props)) {
      setSelectVal(newVal);
    }
    onChange?.(newVal);
    onSelect?.(newVal);
    setSearchValue('');
  };

  // Search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const val = e.target.value;
    setSearchValue(val);
    onSearch?.(val);
    if (!isOpenDropdown) {
      openDropdown();
    }
  };

  // Selector click
  const handleSelectorClick = (): void => {
    if (disabled) return;
    if (isOpenDropdown && !showSearch) {
      closeDropdown();
    } else {
      openDropdown();
      setTimeout(() => searchInputRef.current?.focus(), 0);
    }
  };

  // Keyboard
  const handleKeyDown = (e: React.KeyboardEvent): void => {
    if (disabled) return;

    if (e.key === 'Escape') {
      closeDropdown();
      return;
    }

    if (e.key === 'Backspace' && isMultiple && !searchValue) {
      const arr = Array.isArray(selectVal) ? selectVal : [];
      if (arr.length > 0) {
        const newVal = arr.slice(0, -1);
        if (!('value' in props)) setSelectVal(newVal);
        onChange?.(newVal, flatOptions.filter((o) => newVal.includes(o.value)));
        onSelect?.(newVal);
      }
      return;
    }

    if (e.key === 'Enter' || e.key === ' ') {
      if (!isOpenDropdown) {
        e.preventDefault();
        openDropdown();
      } else if (focusedIndex >= 0 && focusedIndex < filteredOptions.length) {
        e.preventDefault();
        const opt = filteredOptions[focusedIndex];
        if (!opt.disabled) {
          handleSelect(opt.value);
        }
      }
      return;
    }

    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      if (!isOpenDropdown) {
        openDropdown();
        setFocusedIndex(0);
        return;
      }
      const dir = e.key === 'ArrowDown' ? 1 : -1;
      setFocusedIndex((prev) => {
        let next = prev + dir;
        if (next < 0) next = filteredOptions.length - 1;
        if (next >= filteredOptions.length) next = 0;
        return next;
      });
    }
  };

  // Controlled open
  const openProp = props.open;
  const hasOpenProp = 'open' in props;
  useEffect(() => {
    if (hasOpenProp) setIsOpenDropdown(openProp);
  }, [hasOpenProp, openProp]);

  // Controlled value
  const hasValueProp = 'value' in props;
  useEffect(() => {
    if (hasValueProp) setSelectVal(value as SelectValue);
  }, [hasValueProp, value]);

  // Reset focused index when filtered options change
  useEffect(() => {
    setFocusedIndex(-1);
  }, [searchValue]);

  const hasValue = hasSomeValue;

  // Context value
  const contextValue = useMemo(
    () => ({
      value: selectVal,
      mode,
      searchValue,
      onSelect: handleSelect,
      prefixCls,
    }),
    [selectVal, mode, searchValue, handleSelect, prefixCls]
  );

  // Filter children for dropdown
  const filterChildren = (nodes: React.ReactNode): React.ReactNode => {
    return React.Children.map(nodes, (child) => {
      const el = child as React.FunctionComponentElement<SelectOptionsProps>;
      if (!el?.type) return null;
      if (el.type.displayName === 'SelectOption') {
        const opt: SelectOptionItem = {
          value: el.props.value,
          label: el.props.label ?? el.props.children,
          disabled: !!el.props.disabled,
        };
        if (!matchesFilter(opt)) return null;
        return React.cloneElement(el, el.props);
      }
      if (el.type.displayName === 'SelectOptGroup') {
        const filteredGroupChildren = filterChildren(el.props.children);
        const hasVisibleChildren = React.Children.toArray(filteredGroupChildren).some(Boolean);
        if (!hasVisibleChildren) return null;
        return React.cloneElement(el, { ...el.props, children: filteredGroupChildren });
      }
      return null;
    });
  };

  // Render dropdown
  const renderDropdownContent = (): React.ReactNode => {
    if (loading) {
      return (
        <div className={`${prefixCls}__loading`}>
          <LoadingCircle size={20} />
        </div>
      );
    }

    let content: React.ReactNode;

    if (optionsProp) {
      const filtered = filteredOptions;
      if (filtered.length === 0) {
        content = null;
      } else {
        content = filtered.map((opt, index) => {
          const isSelected = isMultiple
            ? Array.isArray(selectVal) && selectVal.includes(opt.value)
            : selectVal === opt.value;
          const optCls = classNames(`${prefixCls}-option`, {
            [`${prefixCls}-option_selected`]: isSelected,
            [`${prefixCls}-option_active`]: index === focusedIndex,
            [`${prefixCls}-option_disabled`]: opt.disabled,
          });

          const label = opt.label ?? opt.value;
          const renderedContent = optionRender ? optionRender(opt, { index }) : label;

          return (
            <li
              key={opt.value}
              role="option"
              className={optCls}
              aria-selected={isSelected}
              aria-disabled={opt.disabled}
              onClick={() => !opt.disabled && handleSelect(opt.value)}
              onMouseEnter={() => setFocusedIndex(index)}>
              <span className={`${prefixCls}-option__content`}>{renderedContent}</span>
              {isMultiple && isSelected && (
                <span className={`${prefixCls}-option__check`}>
                  <Check size={14} />
                </span>
              )}
            </li>
          );
        });
      }
    } else {
      content = filterChildren(children);
    }

    const contentArray = React.Children.toArray(content);
    if (!contentArray || contentArray.length === 0) {
      return (
        <div className={`${prefixCls}__empty`}>
          {notFoundContent ?? 'No data'}
        </div>
      );
    }

    return content;
  };

  const renderOverlay = (): React.ReactElement => {
    const selectorWidth = ref.current?.offsetWidth;
    return (
      <SelectContext.Provider value={contextValue}>
        <ul
          className={`${prefixCls}__dropdown`}
          style={{ minWidth: selectorWidth || undefined, ...dropdownStyle }}
          role="listbox"
          id={listboxId}>
          {renderDropdownContent()}
        </ul>
      </SelectContext.Provider>
    );
  };

  // Render selector content
  const renderSelectorContent = (): React.ReactNode => {
    if (isMultiple) {
      const arr = Array.isArray(selectVal) ? selectVal : [];
      const displayTags =
        maxTagCount !== undefined && arr.length > maxTagCount
          ? arr.slice(0, maxTagCount)
          : arr;
      const remaining =
        maxTagCount !== undefined && arr.length > maxTagCount
          ? arr.length - maxTagCount
          : 0;

      return (
        <>
          {displayTags.map((val) => (
            <span key={val} className={`${prefixCls}__tag`}>
              <span className={`${prefixCls}__tag-content`}>{getLabelForValue(val)}</span>
              <span
                className={`${prefixCls}__tag-close`}
                onClick={(e) => handleRemoveTag(val, e)}
                aria-label="Remove">
                <Close size={10} />
              </span>
            </span>
          ))}
          {remaining > 0 && (
            <span className={`${prefixCls}__tag ${prefixCls}__tag_max`}>
              +{remaining}...
            </span>
          )}
          {showSearch && (
            <input
              ref={searchInputRef}
              className={`${prefixCls}__search`}
              value={searchValue}
              onChange={handleSearchChange}
              autoComplete="off"
              disabled={disabled}
            />
          )}
          {arr.length === 0 && !searchValue && (
            <span className={`${prefixCls}__placeholder`}>{placeholder}</span>
          )}
        </>
      );
    }

    // Single mode
    if (showSearch && isOpenDropdown) {
      return (
        <input
          ref={searchInputRef}
          className={`${prefixCls}__search`}
          value={searchValue}
          onChange={handleSearchChange}
          placeholder={hasValue ? undefined : placeholder}
          autoComplete="off"
          disabled={disabled}
        />
      );
    }

    if (hasValue) {
      return (
        <span className={`${prefixCls}__selection-text`}>
          {getLabelForValue(Array.isArray(selectVal) ? selectVal[0] : (selectVal as string))}
        </span>
      );
    }

    return <span className={`${prefixCls}__placeholder`}>{placeholder}</span>;
  };

  return (
    <div
      {...otherProps}
      ref={ref}
      className={cls}
      role="combobox"
      aria-expanded={isOpenDropdown}
      aria-haspopup="listbox"
      aria-owns={isOpenDropdown ? listboxId : undefined}
      onKeyDown={handleKeyDown}
      tabIndex={disabled ? undefined : 0}>
      <Popup
        trigger="manual"
        placement="bottom"
        arrow={false}
        visible={isOpenDropdown}
        content={renderOverlay()}>
        <div className={`${prefixCls}__selector`} onClick={handleSelectorClick}>
          <div className={`${prefixCls}__selection`}>{renderSelectorContent()}</div>
          <div className={`${prefixCls}__suffix`}>
            <span className={arrowCls}>
              <ArrowDown size={10} />
            </span>
            {allowClear && hasValue && !disabled && (
              <button type="button" className={`${prefixCls}__clear`} onClick={handleClear} aria-label="Clear">
                <CloseCircle size={14} color="currentColor" />
              </button>
            )}
          </div>
        </div>
      </Popup>
    </div>
  );
};

Select.displayName = 'Select';

export default Select;
