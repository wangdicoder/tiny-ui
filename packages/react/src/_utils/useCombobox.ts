import { useState, useCallback, useMemo, useEffect } from 'react';

interface ComboboxItem {
  value: string;
  label?: React.ReactNode;
  disabled?: boolean;
}

interface UseComboboxOptions<T extends ComboboxItem> {
  items: T[];
  searchValue: string;
  filterOption?: boolean | ((input: string, item: T) => boolean);
  isOpen?: boolean;
  defaultOpen?: boolean;
  disabled?: boolean;
  defaultActiveFirstOption?: boolean;
  onOpenChange?: (open: boolean) => void;
  onSelect?: (item: T) => void;
}

export function useCombobox<T extends ComboboxItem>(options: UseComboboxOptions<T>) {
  const {
    items,
    searchValue,
    filterOption = true,
    isOpen: controlledOpen,
    defaultOpen = false,
    disabled = false,
    defaultActiveFirstOption = true,
    onOpenChange,
    onSelect,
  } = options;

  const isControlled = controlledOpen !== undefined;
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const isOpen = isControlled ? controlledOpen : internalOpen;

  const [focusedIndex, setFocusedIndex] = useState(-1);

  useEffect(() => {
    if (isControlled) setInternalOpen(controlledOpen);
  }, [isControlled, controlledOpen]);

  const matchesFilter = useCallback(
    (item: T): boolean => {
      if (!searchValue) return true;
      if (filterOption === false) return true;
      if (typeof filterOption === 'function') return filterOption(searchValue, item);
      const label = typeof item.label === 'string' ? item.label : String(item.value);
      return label.toLowerCase().includes(searchValue.toLowerCase());
    },
    [searchValue, filterOption]
  );

  const filteredItems = useMemo(
    () => items.filter(matchesFilter),
    [items, matchesFilter]
  );

  useEffect(() => {
    if (defaultActiveFirstOption && filteredItems.length > 0) {
      setFocusedIndex(0);
    } else {
      setFocusedIndex(-1);
    }
  }, [filteredItems.length, defaultActiveFirstOption]);

  const openDropdown = useCallback(() => {
    if (!isControlled) setInternalOpen(true);
    onOpenChange?.(true);
  }, [isControlled, onOpenChange]);

  const closeDropdown = useCallback(() => {
    if (!isControlled) setInternalOpen(false);
    onOpenChange?.(false);
  }, [isControlled, onOpenChange]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (disabled) return;

      if (e.key === 'Escape') {
        closeDropdown();
        return;
      }

      if (e.key === 'Enter') {
        if (isOpen && focusedIndex >= 0 && focusedIndex < filteredItems.length) {
          e.preventDefault();
          const item = filteredItems[focusedIndex];
          if (!item.disabled) onSelect?.(item);
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
          if (next < 0) next = filteredItems.length - 1;
          if (next >= filteredItems.length) next = 0;
          return next;
        });
      }
    },
    [disabled, isOpen, focusedIndex, filteredItems, closeDropdown, openDropdown, onSelect]
  );

  return {
    isOpen,
    focusedIndex,
    filteredItems,
    matchesFilter,
    openDropdown,
    closeDropdown,
    setFocusedIndex,
    handleKeyDown,
  };
}
