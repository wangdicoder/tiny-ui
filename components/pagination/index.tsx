import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';

export type PaginationAlignment = 'left' | 'center' | 'right';

export interface PaginationProps extends BaseProps {
  current?: number;
  total?: number;
  defaultCurrent?: number;
  disabled?: boolean;
  pageSize?: number;
  defaultPageSize?: number;
  size?: 'sm' | 'md';
  alignment?: PaginationAlignment;
  onChange?: (current: number, total: number, pageSize: number) => void;
}

type ItemSourceData = {
  type: 'prev' | 'next' | 'jump-prev' | 'jump-next' | 'page';
  disabled?: boolean;
  active?: boolean;
  label: string;
};

const Pagination = (props: PaginationProps): React.ReactElement => {
  const {
    prefixCls = 'ty-pagination',
    alignment = 'center',
    size = 'md',
    defaultCurrent = 1,
    defaultPageSize = 10,
    total = 0,
    onChange,
    className,
    style,
  } = props;
  const cls = classNames(prefixCls, className, {
    [`${prefixCls}_${alignment}`]: alignment,
    [`${prefixCls}_${size}`]: size,
  });
  const [current, setCurrent] = useState(props.current ? props.current : defaultCurrent);
  const [pageSize, setPageSize] = useState(props.pageSize ? props.pageSize : defaultPageSize);

  const itemOnClick = (item: ItemSourceData): void => {
    // If this item is in active or disabled status, reject the next action.
    if (item.active || item.disabled) {
      return;
    }

    const count = Math.ceil(total / pageSize);
    let curr = 0;
    if (item.type === 'page') {
      curr = Number(item.label);
    }
    if (item.type === 'prev') {
      curr = current - 1 > 0 ? current - 1 : 1;
    }
    if (item.type === 'next') {
      curr = current + 1 <= count ? current + 1 : count;
    }
    if (item.type === 'jump-prev' || item.type === 'jump-next') {
      curr = item.type === 'jump-prev' ? current - 5 : current + 5;
      if (curr > count) {
        curr = count;
      }
      if (curr < 1) {
        curr = 1;
      }
    }
    setCurrent(curr);
    onChange && onChange(curr, total, pageSize);
  };

  const renderItems = (): ItemSourceData[] => {
    const items: ItemSourceData[] = [{ type: 'prev', label: '<' }];
    const count = Math.ceil(total / pageSize);
    const itemCount = count <= 5 ? count : 5;
    let num = 0;
    let basic = 0;
    if (current > 3 && count > 5) {
      items.push({ type: 'page', label: '1' });
    }
    if (current > 4 && count > 6) {
      items.push({ type: 'jump-prev', label: '•••' });
    }
    while (num < itemCount) {
      num += 1;
      if (current > 3 && count > 5) {
        basic = current - 3;
      }
      let label = num + basic;
      if (count - current === 0 && count > 5) {
        label -= 2;
      }
      if (count - current === 1 && count > 5) {
        label -= 1;
      }
      if (label <= count) {
        items.push({ type: 'page', label: `${label}`, active: current === label });
      }
    }
    if (current + 3 < count && count > 6) {
      items.push({ type: 'jump-next', label: '•••' });
    }
    if (current + 2 < count && count > 5) {
      items.push({ type: 'page', label: `${count}` });
    }
    items.push({ type: 'next', label: '>', disabled: current === count });
    return items;
  };

  useEffect(() => {
    'current' in props && setCurrent(props.current!);
    'pageSize' in props && setPageSize(props.pageSize!);
  }, [props.current]);

  return (
    <ul unselectable="off" className={cls} style={style}>
      {renderItems().map((item, idx) => {
        const { active, disabled, label } = item;
        const cls = classNames(`${prefixCls}__item`, {
          [`${prefixCls}__item_active`]: active,
          [`${prefixCls}__item_disabled`]: disabled,
        });
        return (
          <li key={idx} className={cls} tabIndex={0} onClick={() => itemOnClick(item)}>
            {label}
          </li>
        );
      })}
    </ul>
  );
};

export default Pagination;
