import { useState, useCallback, useMemo } from 'react';

export interface UseVirtualScrollOptions {
  itemCount: number;
  itemHeight: number;
  containerHeight: number;
  overscan?: number;
}

export interface UseVirtualScrollResult {
  visibleRange: [start: number, end: number];
  totalHeight: number;
  offsetY: number;
  onScroll: (e: React.UIEvent<HTMLElement>) => void;
}

export function useVirtualScroll(options: UseVirtualScrollOptions): UseVirtualScrollResult {
  const { itemCount, itemHeight, containerHeight, overscan = 3 } = options;
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = useCallback((e: React.UIEvent<HTMLElement>) => {
    setScrollTop(e.currentTarget.scrollTop);
  }, []);

  const totalHeight = itemCount * itemHeight;

  const visibleRange = useMemo((): [number, number] => {
    if (itemCount === 0) return [0, 0];
    const start = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan);
    const end = Math.min(
      itemCount - 1,
      Math.ceil((scrollTop + containerHeight) / itemHeight) + overscan
    );
    return [start, end];
  }, [scrollTop, itemHeight, containerHeight, overscan, itemCount]);

  const offsetY = visibleRange[0] * itemHeight;

  return { visibleRange, totalHeight, offsetY, onScroll };
}
