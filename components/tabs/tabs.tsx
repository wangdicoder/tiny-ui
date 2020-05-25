import React, { useContext, useRef, useState, ReactNode, CSSProperties } from 'react';
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
  onChange?: (activeKey?: string) => void;
  onTabClose?: (activeKey?: string) => void;
  onPrevClick?: (e?: MouseEvent) => void;
  onNextClick?: (e?: MouseEvent) => void;
}

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  (props: TabsProps, ref): JSX.Element => {
    const {
      type = 'line',
      direction = 'horizontal',
      size = 'md',
      animated = true,
      activeKey,
      defaultActiveKey,
      onChange,
      className,
      children,
      prefixCls: customisedCls,
      ...otherProps
    } = props;
    const configContext = useContext(ConfigContext);
    const prefixCls = getPrefixCls('tabs', configContext.prefixCls, customisedCls);
    const [lineWidth] = useState(0);
    const [lineHeight] = useState(0);
    const [scrollOffset] = useState(0);
    const [headerWidth] = useState(0);
    const [headerHeight] = useState(0);
    const [scrollWidth] = useState(0);
    const [scrollHeight] = useState(0);
    const [isArrowShown] = useState(false);
    const tabHeaderWrapRef = useRef<HTMLDivElement | null>(null);
    const tabHeaderNavRef = useRef<HTMLDivElement | null>(null);
    const activeTab = useRef<HTMLElement | null>(null);
    const headerDimension = direction === 'horizontal' ? headerWidth : headerHeight;
    const scrollDimension = direction === 'horizontal' ? scrollWidth : scrollHeight;
    const arrowL = direction === 'horizontal' ? 'left' : 'top';
    const arrowR = direction === 'horizontal' ? 'right' : 'bottom';
    const isArrowLDisabled = scrollOffset === 0;
    const isArrowRDisabled =
      Math.floor(Math.abs(scrollOffset + headerDimension - scrollDimension)) === 0;
    const cls = classNames(
      prefixCls,
      className,
      `${prefixCls}_${size}`,
      `${prefixCls}_${direction}`,
      { [`${prefixCls}_${type}`]: direction === 'horizontal' && type }
    );
    const headerNavStyle =
      direction === 'horizontal'
        ? { transform: `translate3d(${-scrollOffset}px, 0, 0)` }
        : { transform: `translate3d(0, ${-scrollOffset}px, 0)` };
    const headerCls = classNames(`${prefixCls}__header`, {
      [`${prefixCls}__header_arrow-mode`]: isArrowShown,
    });
    const bodyCls = classNames(`${prefixCls}__body`, {
      [`${prefixCls}__body_animated`]: animated,
    });
    const arrowLCls = classNames(`${prefixCls}__header__arrow`, {
      [`${prefixCls}__header__arrow--${arrowL}`]: arrowL,
      [`${prefixCls}__header__arrow--disabled`]: isArrowLDisabled,
    });

    const arrowRCls = classNames(`${prefixCls}__header__arrow`, {
      [`${prefixCls}__header__arrow--${arrowR}`]: arrowR,
      [`${prefixCls}__header__arrow--disabled`]: isArrowRDisabled,
    });

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
    const [value] = useState<number>(activeKey || defaultActiveKey || getSelectIndex());
    const animateStyle: CSSProperties =
      direction === 'horizontal' ? { marginLeft: `-${value * 100}%` } : {};

    const scrollLeftOrTop = (e: React.MouseEvent) => {};

    const scrollRightOrBottom = (e: React.MouseEvent) => {};

    // const getHeaderStyle = () => {
    //   const { width: headerWidth = 0, height: headerHeight = 0 } =
    //     (this.tabHeaderWrap &&
    //       this.tabHeaderWrap.current &&
    //       this.tabHeaderWrap.current.getBoundingClientRect()) ||
    //     {};
    //   const { width: scrollWidth = 0, height: scrollHeight = 0 } =
    //     (this.tabHeaderNav &&
    //       this.tabHeaderNav.current &&
    //       this.tabHeaderNav.current.getBoundingClientRect()) ||
    //     {};
    //   return {
    //     headerWidth,
    //     headerHeight,
    //     scrollWidth,
    //     scrollHeight,
    //   };
    // };

    const renderHeaderLine = (): ReactNode => {
      const { offsetLeft = 0, offsetTop = 0 } = activeTab.current || {};
      const headerLineStyle =
        direction === 'horizontal'
          ? { width: lineWidth, height: 0, transform: `translate3d(${offsetLeft}px,0,0)` }
          : { width: 0, height: lineHeight, transform: `translate3d(0,${offsetTop}px,0)` };
      return <div className={`${prefixCls}__header-line`} style={headerLineStyle} />;
    };

    const renderHeaderItem = (): ReactNode => {
      return React.Children.map(children, (child) => {
        const childElement = child as React.FunctionComponentElement<TabPanelProps>;
        if (childElement.type.displayName === 'TabPanel') {
          return <div className={`${prefixCls}__header-nav-item`}>{childElement.props.tab}</div>;
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
              {type === 'line' && renderHeaderLine()}
            </div>
          </div>
          {isArrowShown && (
            <>
              <span className={arrowLCls} onClick={(e) => !isArrowLDisabled && scrollLeftOrTop(e)}>
                <ArrowDown />
              </span>
              <span
                className={arrowRCls}
                onClick={(e) => !isArrowRDisabled && scrollRightOrBottom(e)}>
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
