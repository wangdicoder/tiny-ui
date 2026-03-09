import React, { useCallback, useContext, useEffect, useRef, useState, useMemo } from 'react';
import classNames from 'classnames';
import { useClickOutside } from '../_utils/hooks';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { AutoCompleteOption, AutoCompleteProps } from './types';
import Input from '../input/input';
import Popup from '../popup';

const AutoComplete = React.forwardRef<HTMLDivElement, AutoCompleteProps>(
  (props, ref) => {
    const {
      options = [],
      defaultValue = '',
      placeholder,
      disabled = false,
      allowClear = false,
      defaultActiveFirstOption = true,
      defaultOpen = false,
      notFoundContent,
      size,
      filterOption = true,
      onChange,
      onSelect,
      onSearch,
      onFocus,
      onBlur,
      className,
      style,
      prefixCls: customisedCls,
    } = props;

    const configContext = useContext(ConfigContext);
    const prefixCls = getPrefixCls('auto-complete', configContext.prefixCls, customisedCls);
    const autoCompleteSize = size || configContext.componentSize || 'md';

    const [inputValue, setInputValue] = useState(
      'value' in props ? (props.value as string) : defaultValue
    );
    const [isOpen, setIsOpen] = useState('open' in props ? (props.open as boolean) : defaultOpen);
    const [focusedIndex, setFocusedIndex] = useState(-1);

    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);

    // Merge refs
    const setWrapperRef = useCallback(
      (node: HTMLDivElement | null) => {
        wrapperRef.current = node;
        if (typeof ref === 'function') ref(node);
        else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
      },
      [ref]
    );

    const cls = classNames(prefixCls, className, {
      [`${prefixCls}_disabled`]: disabled,
      [`${prefixCls}_open`]: isOpen,
    });

    // Filter logic
    const matchesFilter = useCallback(
      (opt: AutoCompleteOption): boolean => {
        if (!inputValue) return true;
        if (filterOption === false) return true;
        if (typeof filterOption === 'function') return filterOption(inputValue, opt);
        const label = typeof opt.label === 'string' ? opt.label : opt.value;
        return label.toLowerCase().includes(inputValue.toLowerCase());
      },
      [inputValue, filterOption]
    );

    const filteredOptions = useMemo(
      () => options.filter(matchesFilter),
      [options, matchesFilter]
    );

    // Click outside to close
    useClickOutside(wrapperRef.current as HTMLDivElement, () => {
      if (!('open' in props)) {
        setIsOpen(false);
      }
    });

    // Controlled value
    useEffect(() => {
      if ('value' in props) setInputValue(props.value as string);
    }, [props.value]);

    // Controlled open
    useEffect(() => {
      if ('open' in props) setIsOpen(props.open as boolean);
    }, [props.open]);

    // Reset focused index when options change
    useEffect(() => {
      if (defaultActiveFirstOption && filteredOptions.length > 0) {
        setFocusedIndex(0);
      } else {
        setFocusedIndex(-1);
      }
    }, [filteredOptions.length, defaultActiveFirstOption]);

    const openDropdown = () => {
      if (!('open' in props)) setIsOpen(true);
    };

    const closeDropdown = () => {
      if (!('open' in props)) setIsOpen(false);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      if (!('value' in props)) setInputValue(val);
      onChange?.(val);
      onSearch?.(val);
      openDropdown();
    };

    const handleOptionClick = (opt: AutoCompleteOption) => {
      if (opt.disabled) return;
      if (!('value' in props)) setInputValue(opt.value);
      onChange?.(opt.value);
      onSelect?.(opt.value, opt);
      closeDropdown();
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (disabled) return;

      if (e.key === 'Escape') {
        closeDropdown();
        return;
      }

      if (e.key === 'Enter') {
        if (isOpen && focusedIndex >= 0 && focusedIndex < filteredOptions.length) {
          e.preventDefault();
          const opt = filteredOptions[focusedIndex];
          if (!opt.disabled) handleOptionClick(opt);
        }
        return;
      }

      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        if (!isOpen) {
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

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      openDropdown();
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      onBlur?.(e);
    };

    const handleClear = () => {
      if (!('value' in props)) setInputValue('');
      onChange?.('');
      onSearch?.('');
    };

    const renderDropdown = () => {
      if (filteredOptions.length === 0) {
        if (notFoundContent) {
          return <div className={`${prefixCls}__empty`}>{notFoundContent}</div>;
        }
        return null;
      }

      return filteredOptions.map((opt, index) => {
        const optCls = classNames(`${prefixCls}-option`, {
          [`${prefixCls}-option_active`]: index === focusedIndex,
          [`${prefixCls}-option_disabled`]: opt.disabled,
        });
        return (
          <li
            key={opt.value}
            role="option"
            className={optCls}
            aria-selected={index === focusedIndex}
            aria-disabled={opt.disabled}
            onClick={() => handleOptionClick(opt)}
            onMouseEnter={() => setFocusedIndex(index)}>
            {opt.label ?? opt.value}
          </li>
        );
      });
    };

    const dropdownContent = renderDropdown();
    const showDropdown = isOpen && dropdownContent !== null;

    const renderOverlay = () => {
      const selectorWidth = wrapperRef.current?.offsetWidth;
      return (
        <ul
          className={`${prefixCls}__dropdown`}
          style={{ minWidth: selectorWidth || undefined }}
          role="listbox">
          {dropdownContent}
        </ul>
      );
    };

    return (
      <div
        ref={setWrapperRef}
        className={cls}
        style={style}
        onKeyDown={handleKeyDown}>
        <Popup
          trigger="manual"
          placement="bottom-start"
          arrow={false}
          visible={showDropdown}
          content={renderOverlay()}>
          <Input
            ref={inputRef}
            size={autoCompleteSize}
            placeholder={placeholder}
            disabled={disabled}
            value={inputValue}
            clearable={allowClear}
            onChange={handleInputChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onClearClick={handleClear}
          />
        </Popup>
      </div>
    );
  }
);

AutoComplete.displayName = 'AutoComplete';

export default AutoComplete;
