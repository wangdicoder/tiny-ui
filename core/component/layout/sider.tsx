import * as React from 'react';
import { useState, useContext, useEffect } from 'react';
import classnames from 'classnames';
import Icon from '../icon';
import SiderContext from './sider-context';

export type CollapseType = 'clickTrigger' | 'responsive';
export type SiderTheme = 'light' | 'dark';

export type SiderProps = {
    collapsible?: boolean;
    collapsed?: boolean;
    defaultCollapsed?: boolean;
    onCollapse?: (collapsed: boolean, type: CollapseType) => void;
    trigger?: React.ReactNode;
    width?: number | string;
    collapsedWidth?: number | string;
    breakpoint?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    theme?: SiderTheme;
    onBreakpoint?: (broken: boolean) => void;
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode,
} & typeof defaultProps;

const defaultProps = {
    prefixCls: 'ty-layout-sider',
    collapsible: false,
    defaultCollapsed: false,
    width: 160,
    collapsedWidth: 64,
    theme: 'dark',
};

const Sider = (props: SiderProps) => {
    const { collapsedWidth, width, prefixCls, className, style, children } = props;
    let collapsed;
    if ('collapsed' in props) {
        collapsed = props.collapsed;
    } else {
        collapsed = props.defaultCollapsed;
    }
    const [sideCollapsed, setSideCollapsed] = useState(collapsed);
    const siderHook = useContext(SiderContext);
    const siderWidth = sideCollapsed ? collapsedWidth : width;

    const outerStyle = {
        ...style,
        width: siderWidth,
        maxWidth: siderWidth,
        minWidth: siderWidth,
    };

    const cls = classnames(prefixCls, className, {
        [`${prefixCls}-collapsed`]: sideCollapsed,
    });

    const _renderTrigger = () => {
        return (
            <div onClick={() => setSideCollapsed(!sideCollapsed)}>
                <Icon type="left"/>
            </div>
        );
    };

    useEffect(() => {
        siderHook.addSider('add');
        return () => {
            siderHook.removeSider('remove');
        };
    });

    return (
        <div className={cls} style={outerStyle}>
            <div className={`${prefixCls}__children`}>{children}</div>
            {_renderTrigger()}
        </div>
    );
};

Sider.defaultProps = defaultProps;

export default Sider;
