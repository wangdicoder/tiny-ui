import React, { useCallback, useContext, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';
import { getRect } from '../_utils/dom';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';

export interface WaterfallProps
  extends BaseProps,
    React.PropsWithoutRef<JSX.IntrinsicElements['div']> {
  columns?: number;
  gap?: number;
  children?: React.ReactNode;
}

const Waterfall = (props: WaterfallProps): React.ReactElement => {
  const {
    columns = 5,
    gap = 0,
    prefixCls: customisedCls,
    className,
    style,
    children,
    ...otherProps
  } = props;
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('waterfall', configContext.prefixCls, customisedCls);
  const cls = classNames(prefixCls, className);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleLayout = useCallback(() => {
    const { width } = getRect();
    const items = (containerRef.current as HTMLDivElement).children;
    const itemWidth = width / columns;
    const arr: number[] = [];
    for (let i = 0; i < items.length; i++) {
      const item = items[i] as HTMLElement;
      (item.children[0] as HTMLElement).style.width = `${itemWidth}px`;
      if (i < columns) {
        item.style.top = '0';
        item.style.left = (itemWidth + gap) * i + 'px';
        arr.push(item.offsetHeight);
      } else {
        let minHeight = arr[0];
        let index = 0;
        for (let j = 0; j < arr.length; j++) {
          if (minHeight > arr[j]) {
            minHeight = arr[j];
            index = j;
          }
        }
        item.style.top = arr[index] + gap + 'px';
        item.style.left = (items[index] as HTMLElement).offsetLeft + 'px';
        arr[index] = arr[index] + item.offsetHeight + gap;
      }
    }
  }, [columns, gap]);

  useEffect(() => {
    window.addEventListener('load', handleLayout);
    window.addEventListener('resize', handleLayout);

    return (): void => {
      window.removeEventListener('load', handleLayout);
      window.removeEventListener('resize', handleLayout);
    };
  }, [handleLayout]);

  return (
    <div {...otherProps} ref={containerRef} className={cls} style={style}>
      {React.Children.map(children, (child) =>
        React.createElement('div', { className: `${prefixCls}__item` }, child)
      )}
    </div>
  );
};

export default Waterfall;
