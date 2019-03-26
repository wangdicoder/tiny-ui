import * as React from 'react';
import { useState, useContext, useEffect } from 'react';
import classnames from 'classnames';
import Icon from '../icon';
import SiderContext from './sider-context';

export type SiderTheme = 'light' | 'dark';

export type SiderProps = {
    collapsed?: boolean;
    defaultCollapsed?: boolean;
    onCollapse?: (collapsed: boolean) => void;
    trigger?: React.ReactNode;
    width?: number | string;
    collapsedWidth?: number | string;
    theme?: SiderTheme;
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode,
} & typeof defaultProps;

const defaultProps = {
    prefixCls: 'ty-layout-sider',
    defaultCollapsed: false,
    width: 160,
    collapsedWidth: 64,
    theme: 'dark',
    trigger: null,
};

const Sider = (props: SiderProps) => {
    const { collapsedWidth, width, onCollapse, theme, trigger, prefixCls, className, style, children } = props;
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
