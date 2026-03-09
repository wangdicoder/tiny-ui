import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useCombobox } from '../useCombobox';

interface Item {
  value: string;
  label?: string;
  disabled?: boolean;
}

const items: Item[] = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'grape', label: 'Grape', disabled: true },
];

// Test harness that exposes hook state via data attributes and DOM
function Harness(props: Parameters<typeof useCombobox<Item>>[0]) {
  const combo = useCombobox<Item>(props);
  return (
    <div>
      <input
        data-testid="trigger"
        onKeyDown={combo.handleKeyDown}
        readOnly
      />
      <span data-testid="isOpen">{String(combo.isOpen)}</span>
      <span data-testid="focusedIndex">{combo.focusedIndex}</span>
      <span data-testid="filteredCount">{combo.filteredItems.length}</span>
      <ul data-testid="items">
        {combo.filteredItems.map((item) => (
          <li key={item.value}>{item.value}</li>
        ))}
      </ul>
      <button data-testid="open" onClick={combo.openDropdown}>Open</button>
      <button data-testid="close" onClick={combo.closeDropdown}>Close</button>
    </div>
  );
}

function renderCombobox(overrides: Partial<Parameters<typeof useCombobox<Item>>[0]> = {}) {
  const defaultProps = { items, searchValue: '', ...overrides };
  return render(<Harness {...defaultProps} />);
}

describe('useCombobox', () => {
  describe('filtering', () => {
    it('should show all items when searchValue is empty', () => {
      const { getByTestId } = renderCombobox();
      expect(getByTestId('filteredCount')).toHaveTextContent('4');
    });

    it('should filter items by label (case-insensitive)', () => {
      const { getByTestId } = renderCombobox({ searchValue: 'ap' });
      expect(getByTestId('filteredCount')).toHaveTextContent('2');
    });

    it('should return all items when filterOption is false', () => {
      const { getByTestId } = renderCombobox({ searchValue: 'xyz', filterOption: false });
      expect(getByTestId('filteredCount')).toHaveTextContent('4');
    });

    it('should use custom filter function', () => {
      const filterOption = (_input: string, item: Item) => item.value.startsWith('b');
      const { getByTestId } = renderCombobox({ searchValue: 'anything', filterOption });
      expect(getByTestId('filteredCount')).toHaveTextContent('1');
      expect(getByTestId('items')).toHaveTextContent('banana');
    });

    it('should filter by value when label is not a string', () => {
      const itemsNoLabel: Item[] = [
        { value: 'alpha' },
        { value: 'beta' },
      ];
      const { getByTestId } = renderCombobox({ items: itemsNoLabel, searchValue: 'bet' });
      expect(getByTestId('filteredCount')).toHaveTextContent('1');
    });
  });

  describe('open/close', () => {
    it('should start closed by default', () => {
      const { getByTestId } = renderCombobox();
      expect(getByTestId('isOpen')).toHaveTextContent('false');
    });

    it('should respect defaultOpen', () => {
      const { getByTestId } = renderCombobox({ defaultOpen: true });
      expect(getByTestId('isOpen')).toHaveTextContent('true');
    });

    it('should open and close via helpers', () => {
      const onOpenChange = jest.fn();
      const { getByTestId } = renderCombobox({ onOpenChange });

      fireEvent.click(getByTestId('open'));
      expect(getByTestId('isOpen')).toHaveTextContent('true');
      expect(onOpenChange).toHaveBeenCalledWith(true);

      fireEvent.click(getByTestId('close'));
      expect(getByTestId('isOpen')).toHaveTextContent('false');
      expect(onOpenChange).toHaveBeenCalledWith(false);
    });

    it('should not change internal state when controlled', () => {
      const { getByTestId } = renderCombobox({ isOpen: false });
      fireEvent.click(getByTestId('open'));
      expect(getByTestId('isOpen')).toHaveTextContent('false');
    });
  });

  describe('focusedIndex', () => {
    it('should default to 0 when defaultActiveFirstOption is true and items exist', () => {
      const { getByTestId } = renderCombobox();
      expect(getByTestId('focusedIndex')).toHaveTextContent('0');
    });

    it('should default to -1 when defaultActiveFirstOption is false', () => {
      const { getByTestId } = renderCombobox({ defaultActiveFirstOption: false });
      expect(getByTestId('focusedIndex')).toHaveTextContent('-1');
    });

    it('should default to -1 when items are empty', () => {
      const { getByTestId } = renderCombobox({ items: [] });
      expect(getByTestId('focusedIndex')).toHaveTextContent('-1');
    });
  });

  describe('keyboard navigation', () => {
    it('should open on ArrowDown when closed', () => {
      const { getByTestId } = renderCombobox();
      fireEvent.keyDown(getByTestId('trigger'), { key: 'ArrowDown' });
      expect(getByTestId('isOpen')).toHaveTextContent('true');
    });

    it('should close on Escape', () => {
      const { getByTestId } = renderCombobox({ defaultOpen: true });
      fireEvent.keyDown(getByTestId('trigger'), { key: 'Escape' });
      expect(getByTestId('isOpen')).toHaveTextContent('false');
    });

    it('should cycle focusedIndex with ArrowDown/ArrowUp', () => {
      const { getByTestId } = renderCombobox({ defaultOpen: true });

      // Start at 0, go down
      fireEvent.keyDown(getByTestId('trigger'), { key: 'ArrowDown' });
      expect(getByTestId('focusedIndex')).toHaveTextContent('1');

      fireEvent.keyDown(getByTestId('trigger'), { key: 'ArrowDown' });
      expect(getByTestId('focusedIndex')).toHaveTextContent('2');

      // Go up
      fireEvent.keyDown(getByTestId('trigger'), { key: 'ArrowUp' });
      expect(getByTestId('focusedIndex')).toHaveTextContent('1');
    });

    it('should wrap around at boundaries', () => {
      const { getByTestId } = renderCombobox({ defaultOpen: true });

      // Go up from 0 → wraps to last
      fireEvent.keyDown(getByTestId('trigger'), { key: 'ArrowUp' });
      expect(getByTestId('focusedIndex')).toHaveTextContent('3');

      // Go down from last → wraps to 0
      fireEvent.keyDown(getByTestId('trigger'), { key: 'ArrowDown' });
      expect(getByTestId('focusedIndex')).toHaveTextContent('0');
    });

    it('should select focused item on Enter', () => {
      const onSelect = jest.fn();
      const { getByTestId } = renderCombobox({ defaultOpen: true, onSelect });

      // Focus is at 0 (Apple)
      fireEvent.keyDown(getByTestId('trigger'), { key: 'Enter' });
      expect(onSelect).toHaveBeenCalledWith(expect.objectContaining({ value: 'apple' }));
    });

    it('should not select disabled item on Enter', () => {
      const onSelect = jest.fn();
      const { getByTestId } = renderCombobox({ defaultOpen: true, onSelect });

      // Navigate to grape (index 3, disabled)
      fireEvent.keyDown(getByTestId('trigger'), { key: 'ArrowDown' });
      fireEvent.keyDown(getByTestId('trigger'), { key: 'ArrowDown' });
      fireEvent.keyDown(getByTestId('trigger'), { key: 'ArrowDown' });
      expect(getByTestId('focusedIndex')).toHaveTextContent('3');

      fireEvent.keyDown(getByTestId('trigger'), { key: 'Enter' });
      expect(onSelect).not.toHaveBeenCalled();
    });

    it('should ignore keyboard when disabled', () => {
      const { getByTestId } = renderCombobox({ disabled: true });
      fireEvent.keyDown(getByTestId('trigger'), { key: 'ArrowDown' });
      expect(getByTestId('isOpen')).toHaveTextContent('false');
    });
  });
});
