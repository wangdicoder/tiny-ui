import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';

export type PaginationAlign = 'left' | 'center' | 'right';

export interface PaginationProps extends BaseProps {
  current?: number;
  total?: number;
  defaultCurrent?: number;
  disabled?: boolean;
  pageSize?: number;
  defaultPageSize?: number;
  size?: 'sm' | 'md';
  align?: PaginationAlign;
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
    align = 'center',
    size = 'md',
    defaultCurrent = 1,
    defaultPageSize = 10,
    total = 0,
    disabled = false,
    onChange,
    className,
    style,
  } = props;
  const cls = classNames(prefixCls, className, {
    [`${prefixCls}_${align}`]: align,
    [`${prefixCls}_${size}`]: size,
    [`${prefixCls}_disabled`]: disabled,
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

    !('current' in props) && setCurrent(curr);
    onChange && onChange(curr, total, pageSize);
  };

  const getItems = (): ItemSourceData[] => {
    const count = Math.ceil(total / pageSize);
    const items: ItemSourceData[] = [
      { type: 'prev', label: '<', disabled: disabled || current === 1 },
    ];
    const itemCount = count <= 5 ? count : 5;
    let num = 0;
    let basic = 0;
    if (current > 3 && count > 5) {
      items.push({ disabled, type: 'page', label: '1' });
    }
    if (current > 4 && count > 6) {
      items.push({ disabled, type: 'jump-prev', label: '•••' });
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
        items.push({ disabled, type: 'page', label: `${label}`, active: current === label });
      }
    }
    if (current + 3 < count && count > 6) {
      items.push({ disabled, type: 'jump-next', label: '•••' });
    }
    if (current + 2 < count && count > 5) {
      items.push({ disabled, type: 'page', label: `${count}` });
    }
    items.push({ type: 'next', label: '>', disabled: disabled || current === count });
    return items;
  };

  const renderItem = (item: ItemSourceData): React.ReactNode => {
    const { type, label } = item;
    switch (type) {
      case 'prev':
        return (
          <svg
            viewBox="64 64 896 896"
            focusable="false"
            className=""
            data-icon="left"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true">
            <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z" />
          </svg>
        );

      case 'next':
        return (
          <svg
            viewBox="64 64 896 896"
            focusable="false"
            className=""
            data-icon="right"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true">
            <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z" />
          </svg>
        );

      default:
        return label;
    }
  };

  useEffect(() => {
    'current' in props && setCurrent(props.current!);
    'pageSize' in props && setPageSize(props.pageSize!);
  }, [props.current]);

  return (
    <ul unselectable="off" className={cls} style={style}>
      {getItems().map((item, idx) => {
        const { active, disabled, type } = item;
        const cls = classNames(`${prefixCls}__item`, {
          [`${prefixCls}__item_active`]: active,
          [`${prefixCls}__item_disabled`]: disabled,
          [`${prefixCls}__item_ellipsis`]: type === 'jump-next' || type === 'jump-prev',
        });
        return (
          <li key={idx} className={cls} tabIndex={0} onClick={(): void => itemOnClick(item)}>
            {renderItem(item)}
          </li>
        );
      })}
    </ul>
  );
};

export default Pagination;
