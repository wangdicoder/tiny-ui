import * as React from 'react';
import { useState, useContext, useEffect } from 'react';
import classnames from 'classnames';
import Icon from '../icon';
import SideContext from './side-context';

export type CollapseType = 'clickTrigger' | 'responsive';
export type SiderTheme = 'light' | 'dark';

export type SideProps = {
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
    prefixCls: 'ty-layout-side',
    collapsible: false,
    defaultCollapsed: false,
    width: 160,
    collapsedWidth: 64,
    theme: 'dark',
};

const Side = (props: SideProps) => {
    const { collapsedWidth, width, prefixCls, className, style, children } = props;
    let collapsed;
    if ('collapsed' in props) {
        collapsed = props.collapsed;
    } else {
        collapsed = props.defaultCollapsed;
    }
    const [sideCollapsed, setSideCollapsed] = useState(collapsed);
    const sideHook = useContext(SideContext);
    const sideWidth = sideCollapsed ? collapsedWidth : width;

    const outerStyle = {
        ...style,
        width: sideWidth,
        maxWidth: sideWidth,
        minWidth: sideWidth,
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
        sideHook.addSide('add');
        return () => {
            sideHook.removeSide('remove');
        };
    });

    return (
        <div className={cls} style={outerStyle}>
            <div className={`${prefixCls}__children`}>{children}</div>
            {_renderTrigger()}
        </div>
    );
};

Side.defaultProps = defaultProps;

export default Side;
