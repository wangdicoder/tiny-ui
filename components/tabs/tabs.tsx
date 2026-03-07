import React, { useContext, useRef, useState, useEffect, useCallback, ReactNode, CSSProperties } from 'react';
import classNames from 'classnames';
import { BaseProps, DirectionType, SizeType } from '../_utils/props';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { TabPanelProps } from './tab-panel';
import { ArrowDown } from '../_utils/components';

export type TabType = 'line' | 'card' | 'noborder-card';

export interface TabsProps
  extends BaseProps,
    Omit<React.PropsWithRef<JSX.IntrinsicElements['div']>, 'onChange'> {
  activeKey?: number;
  defaultActiveKey?: number;
  type?: TabType;
  animated?: boolean;
  direction?: DirectionType;
  size?: SizeType;
  onChange?: (activeKey: number) => void;
  onTabClose?: (activeKey?: string) => void;
  onPrevClick?: (e?: React.MouseEvent) => void;
  onNextClick?: (e?: React.MouseEvent) => void;
}

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  (props: TabsProps, ref): JSX.Element => {
    const {
      type = 'line',
      direction = 'horizontal',
      size = 'md',
      animated = true,
      activeKey,
      defaultActiveKey = 0,
      onChange,
      className,
      children,
      prefixCls: customisedCls,
      ...otherProps
    } = props;
    const configContext = useContext(ConfigContext);
    const prefixCls = getPrefixCls('tabs', configContext.prefixCls, customisedCls);

    const getSelectIndex = (): number => {
      let selectIndex = 0;
      React.Children.forEach(children, (child, idx) => {
        const element = child as React.FunctionComponentElement<TabPanelProps>;
        if (element.props && element.props.selected) {
          selectIndex = idx;
        }
      });
      return selectIndex;
    };

    const [value, setValue] = useState<number>(activeKey ?? defaultActiveKey ?? getSelectIndex());
    const [lineStyle, setLineStyle] = useState<CSSProperties>({});
    const [scrollOffset, setScrollOffset] = useState(0);
    const [isArrowShown, setIsArrowShown] = useState(false);
    const tabHeaderWrapRef = useRef<HTMLDivElement | null>(null);
    const tabHeaderNavRef = useRef<HTMLDivElement | null>(null);
    const tabItemRefs = useRef<(HTMLDivElement | null)[]>([]);

    const isHorizontal = direction === 'horizontal';

    useEffect(() => {
      if (activeKey !== undefined) {
        setValue(activeKey);
      }
    }, [activeKey]);

    const updateLineStyle = useCallback(() => {
      const activeEl = tabItemRefs.current[value];
      if (!activeEl || type !== 'line') return;

      if (isHorizontal) {
        setLineStyle({
          width: activeEl.offsetWidth,
          transform: `translate3d(${activeEl.offsetLeft}px, 0, 0)`,
        });
      } else {
        setLineStyle({
          height: activeEl.offsetHeight,
          transform: `translate3d(0, ${activeEl.offsetTop}px, 0)`,
        });
      }
    }, [value, type, isHorizontal]);

    const checkArrows = useCallback(() => {
      const wrapEl = tabHeaderWrapRef.current;
      const navEl = tabHeaderNavRef.current;
      if (!wrapEl || !navEl) return;

      if (isHorizontal) {
        setIsArrowShown(navEl.scrollWidth > wrapEl.clientWidth);
      } else {
        setIsArrowShown(navEl.scrollHeight > wrapEl.clientHeight);
      }
    }, [isHorizontal]);

    useEffect(() => {
      updateLineStyle();
      checkArrows();
    }, [updateLineStyle, checkArrows]);

    const handleTabClick = (idx: number, disabled?: boolean) => {
      if (disabled) return;
      setValue(idx);
      onChange?.(idx);
    };

    const scrollStep = 200;
    const getMaxScroll = () => {
      const wrapEl = tabHeaderWrapRef.current;
      const navEl = tabHeaderNavRef.current;
      if (!wrapEl || !navEl) return 0;
      return isHorizontal
        ? navEl.scrollWidth - wrapEl.clientWidth
        : navEl.scrollHeight - wrapEl.clientHeight;
    };

    const scrollLeftOrTop = () => {
      setScrollOffset((prev) => Math.max(0, prev - scrollStep));
    };

    const scrollRightOrBottom = () => {
      const max = getMaxScroll();
      setScrollOffset((prev) => Math.min(max, prev + scrollStep));
    };

    const isArrowLDisabled = scrollOffset === 0;
    const isArrowRDisabled = scrollOffset >= getMaxScroll();

    const cls = classNames(
      prefixCls,
      className,
      `${prefixCls}_${size}`,
      `${prefixCls}_${direction}`,
      { [`${prefixCls}_${type}`]: isHorizontal && type }
    );
    const headerNavStyle: CSSProperties = isHorizontal
      ? { transform: `translate3d(${-scrollOffset}px, 0, 0)` }
      : { transform: `translate3d(0, ${-scrollOffset}px, 0)` };
    const headerCls = classNames(`${prefixCls}__header`, {
      [`${prefixCls}__header_arrow-mode`]: isArrowShown,
    });
    const bodyCls = classNames(`${prefixCls}__body`, {
      [`${prefixCls}__body_animated`]: animated,
    });
    const arrowL = isHorizontal ? 'left' : 'top';
    const arrowR = isHorizontal ? 'right' : 'bottom';
    const arrowLCls = classNames(`${prefixCls}__header__arrow`, {
      [`${prefixCls}__header__arrow--${arrowL}`]: arrowL,
      [`${prefixCls}__header__arrow--disabled`]: isArrowLDisabled,
    });
    const arrowRCls = classNames(`${prefixCls}__header__arrow`, {
      [`${prefixCls}__header__arrow--${arrowR}`]: arrowR,
      [`${prefixCls}__header__arrow--disabled`]: isArrowRDisabled,
    });

    const animateStyle: CSSProperties =
      isHorizontal ? { marginLeft: `-${value * 100}%` } : {};

    const renderHeaderItem = (): ReactNode => {
      return React.Children.map(children, (child, idx) => {
        const childElement = child as React.FunctionComponentElement<TabPanelProps>;
        if (childElement.type.displayName === 'TabPanel') {
          const itemCls = classNames(`${prefixCls}__header-nav-item`, {
            [`${prefixCls}__header-nav-item_active`]: idx === value,
            [`${prefixCls}__header-nav-item_disabled`]: childElement.props.disabled,
          });
          return (
            <div
              ref={(el) => { tabItemRefs.current[idx] = el; }}
              className={itemCls}
              onClick={() => handleTabClick(idx, childElement.props.disabled)}>
              {childElement.props.tab}
            </div>
          );
        } else {
          return null;
        }
      });
    };

    return (
      <div {...otherProps} ref={ref} className={cls}>
        <div className={headerCls}>
          <div className={`${prefixCls}__header-scroll`} ref={tabHeaderWrapRef}>
            <div
              className={`${prefixCls}__header-nav`}
              ref={tabHeaderNavRef}
              style={isArrowShown ? headerNavStyle : {}}>
              {renderHeaderItem()}
              {type === 'line' && (
                <div className={`${prefixCls}__header-line`} style={lineStyle} />
              )}
            </div>
          </div>
          {isArrowShown && (
            <>
              <span className={arrowLCls} onClick={() => !isArrowLDisabled && scrollLeftOrTop()}>
                <ArrowDown />
              </span>
              <span className={arrowRCls} onClick={() => !isArrowRDisabled && scrollRightOrBottom()}>
                <ArrowDown />
              </span>
            </>
          )}
        </div>
        <div className={bodyCls} style={animateStyle}>
          {React.Children.map(children, (child, idx) => {
            const childElement = child as React.FunctionComponentElement<TabPanelProps>;
            if (childElement.type.displayName === 'TabPanel') {
              const childProps = {
                ...childElement.props,
                selected: value === idx,
              };
              return React.cloneElement(childElement, childProps);
            } else {
              console.warn('Tabs has a child that is not a TabPanel component.');
              return null;
            }
          })}
        </div>
      </div>
    );
  }
);

Tabs.displayName = 'Tabs';

export default Tabs;
