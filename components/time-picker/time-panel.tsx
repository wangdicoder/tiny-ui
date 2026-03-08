import { useRef, useEffect, useCallback } from 'react';
import classNames from 'classnames';

export interface TimePanelProps {
  value: number;
  items: number[];
  disabledItems?: number[];
  onChange: (num: number) => void;
  prefixCls: string;
}

const TimePanel = (props: TimePanelProps): React.ReactElement => {
  const { prefixCls, value, items, disabledItems = [], onChange } = props;
  const panelRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Map<number, HTMLLIElement>>(new Map());

  const scrollToItem = useCallback((val: number, smooth = false) => {
    const el = itemRefs.current.get(val);
    if (el && panelRef.current) {
      panelRef.current.scrollTo({
        top: el.offsetTop,
        behavior: smooth ? 'smooth' : 'auto',
      });
    }
  }, []);

  useEffect(() => {
    scrollToItem(value);
  }, [value, scrollToItem]);

  const handleClick = (num: number) => {
    if (disabledItems.includes(num)) return;
    onChange(num);
    scrollToItem(num, true);
  };

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
