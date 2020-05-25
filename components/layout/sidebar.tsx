import * as React from 'react';
import { useState, useContext, useEffect } from 'react';
import classNames from 'classnames';
import Icon from '../icon';
import { SidebarContext } from './sidebar-context';
import { BaseProps } from '../_utils/props';

export type SidebarTheme = 'light' | 'dark';

export interface SidebarProps extends BaseProps {
  collapsible?: boolean;
  collapsed?: boolean;
  defaultCollapsed?: boolean;
  onCollapse?: (collapsed: boolean) => void;
  trigger?: React.ReactNode;
  width?: number | string;
  collapsedWidth?: number | string;
  theme?: SidebarTheme;
  children?: React.ReactNode;
}

const Sidebar = (props: SidebarProps): JSX.Element => {
  const {
    prefixCls = 'ty-layout-sidebar',
    defaultCollapsed = false,
    width = 200,
    collapsedWidth = 70,
    theme = 'dark',
    trigger = null,
    collapsible = false,
    onCollapse,
    className,
    style,
    children,
  } = props;

  const [sideCollapsed, setSideCollapsed] = useState(
    'collapsed' in props ? props.collapsed : defaultCollapsed
  );
  const sidebarContext = useContext(SidebarContext);
  const sidebarWidth = sideCollapsed ? collapsedWidth : width;

  const outerStyle = {
    ...style,
    width: sidebarWidth,
    maxWidth: sidebarWidth,
    minWidth: sidebarWidth,
  };

  const cls = classNames(prefixCls, className, {
    [`${prefixCls}_light`]: theme === 'light',
  });

  const _collapseBtnOnClick = () => {
    const collapsedVal = !sideCollapsed;
    if (!('collapsed' in props)) {
      setSideCollapsed(collapsedVal);
    }
    onCollapse && onCollapse(collapsedVal);
  };

  const renderTrigger = () => {
    if (!collapsible) {
      return null;
    }

    if (trigger) {
      return trigger;
    }

    return (
      <div className={`${prefixCls}__trigger`} onClick={_collapseBtnOnClick}>
        <Icon name="left" className={`${prefixCls}__trigger-icon`} />
      </div>
    );
  };

  useEffect(() => {
    'collapsed' in props && setSideCollapsed(props.collapsed);
    sidebarContext.addSidebar();

    return () => {
      sidebarContext.removeSidebar();
    };
  }, [props, sidebarContext]);

  return (
    <div className={cls} style={outerStyle}>
      <div className={`${prefixCls}__children`}>{children}</div>
      {renderTrigger()}
    </div>
  );
};

export default Sidebar;
