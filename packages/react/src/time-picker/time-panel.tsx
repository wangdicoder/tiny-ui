import { useRef, useEffect, useCallback } from 'react';
import classNames from 'classnames';

export interface TimePanelProps {
  value: number;
  items: number[];
  disabledItems?: number[];
  loop?: boolean;
  onChange: (num: number) => void;
  prefixCls: string;
}

const ITEM_HEIGHT = 28; // 4px padding-top + 20px line-height + 4px padding-bottom

const TimePanel = (props: TimePanelProps): React.ReactElement => {
  const { prefixCls, value, items, disabledItems = [], loop = false, onChange } = props;
  const panelRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Map<number, HTMLLIElement>>(new Map());
  const isResetting = useRef(false);
  const clickedRef = useRef(false);
  const scrollToItemRef = useRef<((val: number) => void) | null>(null);

  const oneGroupHeight = items.length * ITEM_HEIGHT;

  scrollToItemRef.current = (val: number) => {
    const panel = panelRef.current;
    if (!panel) return;

    if (loop) {
      const idx = items.indexOf(val);
      if (idx === -1) return;
      const top = oneGroupHeight + idx * ITEM_HEIGHT;
      isResetting.current = true;
      panel.scrollTo({ top, behavior: 'auto' });
      requestAnimationFrame(() => { isResetting.current = false; });
    } else {
      const el = itemRefs.current.get(val);
      if (el) {
        panel.scrollTo({ top: el.offsetTop, behavior: 'auto' });
      }
    }
  };

  useEffect(() => {
    if (clickedRef.current) {
      clickedRef.current = false;
      return;
    }
    scrollToItemRef.current?.(value);
  }, [value]);

  // Scroll reset for loop mode
  const handleScroll = useCallback(() => {
    if (!loop || isResetting.current) return;
    const panel = panelRef.current;
    if (!panel) return;

    const st = panel.scrollTop;
    if (st < oneGroupHeight || st >= 2 * oneGroupHeight) {
      isResetting.current = true;
      panel.scrollTo({ top: (st % oneGroupHeight) + oneGroupHeight, behavior: 'auto' });
      requestAnimationFrame(() => { isResetting.current = false; });
    }
  }, [loop, oneGroupHeight]);

  const handleClick = (num: number) => {
    if (disabledItems.includes(num)) return;
    clickedRef.current = true;
    onChange(num);
  };

  if (loop) {
    const copies = [0, 1, 2];
    return (
      <div className={`${prefixCls}__column`} ref={panelRef} onScroll={handleScroll}>
        <ul className={`${prefixCls}__column-list`}>
          {copies.map((copyIdx) =>
            items.map((num, i) => {
              const isDisabled = disabledItems.includes(num);
              const cls = classNames(`${prefixCls}__cell`, {
                [`${prefixCls}__cell_selected`]: num === value,
                [`${prefixCls}__cell_disabled`]: isDisabled,
              });
              return (
                <li
                  key={`c${copyIdx}-${i}`}
                  className={cls}
                  onClick={() => handleClick(num)}>
                  {String(num).padStart(2, '0')}
                </li>
              );
            })
          )}
        </ul>
      </div>
    );
  }

  return (
    <div className={`${prefixCls}__column`} ref={panelRef}>
      <ul className={`${prefixCls}__column-list`}>
        {items.map((num) => {
          const isDisabled = disabledItems.includes(num);
          const cls = classNames(`${prefixCls}__cell`, {
            [`${prefixCls}__cell_selected`]: num === value,
            [`${prefixCls}__cell_disabled`]: isDisabled,
          });
          return (
            <li
              key={num}
              ref={(el) => {
                if (el) itemRefs.current.set(num, el);
              }}
              className={cls}
              onClick={() => handleClick(num)}>
              {String(num).padStart(2, '0')}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TimePanel;
