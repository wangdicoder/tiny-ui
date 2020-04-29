import { RefObject, useEffect, useState } from 'react';

export const useEventListener = (
  event: keyof HTMLElementEventMap,
  handler: EventListener,
  target?: HTMLElement | Window
): void => {
  const el = target ? target : window;
  useEffect(() => {
    el.addEventListener(event, handler);

    return (): void => {
      el.removeEventListener(event, handler);
    };
  }, [el, event, handler]);
};

export const useClickOutside = (ref: RefObject<HTMLElement>, handler: Function): void => {
  useEffect(() => {
    const listener = (event: MouseEvent): void => {
      if (!ref.current || ref.current.contains(event.target as HTMLElement)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('click', listener);
    return (): void => {
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
