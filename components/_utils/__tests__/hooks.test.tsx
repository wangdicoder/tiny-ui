import React, { useState } from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import { useClickOutside, useDebounce } from '../hooks';

describe('useClickOutside', () => {
  // useClickOutside reads the target element directly (not a ref), so we need
  // a state-based ref pattern that triggers a re-render once the element mounts.
  function ClickOutsideHarness() {
    const [clicked, setClicked] = useState(false);
    const [el, setEl] = useState<HTMLDivElement | null>(null);

    useClickOutside(el as HTMLDivElement, () => setClicked(true));

    return (
      <div>
        <div ref={setEl} data-testid="inside">Inside</div>
        <div data-testid="outside">Outside</div>
        <span data-testid="result">{String(clicked)}</span>
      </div>
    );
  }

  it('should call handler when clicking outside target', () => {
    const { getByTestId } = render(<ClickOutsideHarness />);
    fireEvent.click(getByTestId('outside'));
    expect(getByTestId('result')).toHaveTextContent('true');
  });

  it('should not call handler when clicking inside target', () => {
    const { getByTestId } = render(<ClickOutsideHarness />);
    fireEvent.click(getByTestId('inside'));
    expect(getByTestId('result')).toHaveTextContent('false');
  });
});

describe('useDebounce', () => {
  function DebounceHarness({ value, delay }: { value: string; delay?: number }) {
    const [debounced] = useDebounce(value, delay);
    return <span data-testid="debounced">{debounced}</span>;
  }

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should return initial value immediately', () => {
    const { getByTestId } = render(<DebounceHarness value="hello" />);
    expect(getByTestId('debounced')).toHaveTextContent('hello');
  });

  it('should debounce value changes', () => {
    const { getByTestId, rerender } = render(<DebounceHarness value="a" delay={200} />);
    expect(getByTestId('debounced')).toHaveTextContent('a');

    rerender(<DebounceHarness value="b" delay={200} />);
    // Not yet updated
    expect(getByTestId('debounced')).toHaveTextContent('a');

    act(() => {
      jest.advanceTimersByTime(200);
    });
    expect(getByTestId('debounced')).toHaveTextContent('b');
  });

  it('should cancel pending update on new value', () => {
    const { getByTestId, rerender } = render(<DebounceHarness value="a" delay={200} />);

    rerender(<DebounceHarness value="b" delay={200} />);
    act(() => { jest.advanceTimersByTime(100); });

    rerender(<DebounceHarness value="c" delay={200} />);
    act(() => { jest.advanceTimersByTime(100); });

    // 'b' should have been cancelled, still showing 'a'
    expect(getByTestId('debounced')).toHaveTextContent('a');

    act(() => { jest.advanceTimersByTime(100); });
    expect(getByTestId('debounced')).toHaveTextContent('c');
  });
});
