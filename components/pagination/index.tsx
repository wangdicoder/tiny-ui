import React, { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { ArrowDown } from '../_utils/components';
import { PaginationProps } from './types';

type ItemSourceData = {
  type: 'prev' | 'next' | 'jump-prev' | 'jump-next' | 'page';
  disabled?: boolean;
  active?: boolean;
  label: string;
};

const Pagination = (props: PaginationProps): JSX.Element => {
  const {
    align = 'center',
    size = 'md',
    defaultCurrent = 1,
    defaultPageSize = 10,
    total = 0,
    disabled = false,
    onChange,
    className,
    prefixCls: customisedCls,
    ...otherProps
  } = props;
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('pagination', configContext.prefixCls, customisedCls);
  const cls = classNames(prefixCls, className, {
    [`${prefixCls}_${align}`]: align,
    [`${prefixCls}_${size}`]: size,
    [`${prefixCls}_disabled`]: disabled,
  });
  const [current, setCurrent] = useState<number>(
    'current' in props ? (props.current as number) : defaultCurrent
  );
  const [pageSize, setPageSize] = useState<number>(
    'pageSize' in props ? (props.pageSize as number) : defaultPageSize
  );

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
        return <ArrowDown size={12} className={`${prefixCls}__left-arrow`} />;

      case 'next':
        return <ArrowDown size={12} className={`${prefixCls}__right-arrow`} />;

      default:
        return label;
    }
  };

  useEffect(() => {
    'current' in props && setCurrent(props.current as number);
    'pageSize' in props && setPageSize(props.pageSize as number);
  }, [props]);

  return (
    <ul {...otherProps} unselectable="off" className={cls}>
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
