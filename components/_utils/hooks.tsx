import { RefObject, useEffect, useState } from 'react';

export const useClickOutside = (ref: RefObject<HTMLElement>, handler: Function): void => {
  useEffect(() => {
    const listener = (event: MouseEvent): void => {
      if (!ref.current || ref.current.contains(event.target as HTMLElement)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('click', listener);
    return () => {
      document.removeEventListener('click', listener);
    };
  }, [ref, handler]);
};

export function useDebounce<T>(value: T, delay = 300): [T] {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = window.setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return (): void => {
      window.clearTimeout(handler);
    };
  }, [value, delay]);

  return [debouncedValue];
}
