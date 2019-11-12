import * as React from 'react';
import { useState, useContext, useEffect } from 'react';
import classnames from 'classnames';
import Icon from '../icon';
import SidebarContext from './sidebar-context';

export type SidebarTheme = 'light' | 'dark';

export type SidebarProps = {
    collapsible?: boolean,
    collapsed?: boolean,
    defaultCollapsed?: boolean,
    onCollapse?: (collapsed: boolean) => void,
    trigger?: React.ReactNode,
    width?: number | string,
    collapsedWidth?: number | string,
    theme?: SidebarTheme,
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode,
} & typeof defaultProps;

const defaultProps = {
    prefixCls: 'ty-layout-sidebar',
    defaultCollapsed: false,
    width: 200,
    collapsedWidth: 70,
    theme: 'dark',
    trigger: null,
    collapsible: false,
};

const Sidebar = (props: SidebarProps) => {
    const {
        collapsible, collapsedWidth, width, onCollapse, theme, trigger, prefixCls,
        className, style, children,
    } = props;
    let collapsed;
    if ('collapsed' in props) {
        collapsed = props.collapsed;
    } else {
        collapsed = props.defaultCollapsed;
    }
    const [sideCollapsed, setSideCollapsed] = useState(collapsed);
    const sidebarHook = useContext(SidebarContext);
    const sidebarWidth = sideCollapsed ? collapsedWidth : width;

    const outerStyle = {
        ...style,
        width: sidebarWidth,
        maxWidth: sidebarWidth,
        minWidth: sidebarWidth,
    };

    const cls = classnames(prefixCls, className, {
        [`${prefixCls}_light`]: theme === 'light',
    });

    const _collapseBtnOnClick = () => {
        const collapsedVal = !sideCollapsed;
        if (!('collapsed' in props)) {
            setSideCollapsed(collapsedVal);
        }
        onCollapse && onCollapse(collapsedVal);
    };

    const _renderTrigger = () => {
        if (!collapsible) {
            return null;
        }

        if (trigger) {
            return trigger;
        }

        return (
            <div className={`${prefixCls}__trigger`} onClick={_collapseBtnOnClick}>
                <Icon type="left" className={`${prefixCls}__trigger-icon`}/>
            </div>
        );
    };

    useEffect(() => {
        if ('collapsed' in props) {
            setSideCollapsed(props.collapsed);
        }

        sidebarHook.addSidebar();
        return () => {
            sidebarHook.removeSidebar();
        };
    });

    return (
        <div className={cls} style={outerStyle}>
            <div className={`${prefixCls}__children`}>{children}</div>
            {_renderTrigger()}
        </div>
    );
};

Sidebar.defaultProps = defaultProps;

export default Sidebar;
