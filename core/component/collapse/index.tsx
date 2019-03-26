import * as React from 'react';
import { useState, useEffect } from 'react';
import './style/index.css';
import classNames from 'classnames';
import CollapsePanel, { CollapsePanelProps } from './collapse-panel';

export type CollapseTypes = {
    defaultActiveKey?: string | string[],
    activeKey?: string | string[],
    /** Only open one panel */
    accordion?: boolean,
    /** Allow to delete */
    deletable?: boolean,
    showArrow?: boolean,
    bordered?: boolean,
    onChange?: (keys: string[]) => any,
    children: React.ReactElement<CollapsePanelProps>,
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties,
} & typeof defaultProps;

const defaultProps = {
    prefixCls: 'ty-collapse',
    showArrow: true,
    bordered: true,
    deletable: false,
    accordion: false,
    defaultActiveKey: [],
    onChange: () => {
    },
};

/**
 * Format active key to array
 * @param activeKey
 */
const toArray = (activeKey: string | string[]) => {
    return Array.isArray(activeKey) ? activeKey : [activeKey];
};

const Collapse = (props: CollapseTypes) => {
    const {
        defaultActiveKey, activeKey, accordion, bordered, onChange, deletable, showArrow, prefixCls, className, style,
        children,
    } = props;
    let currentActiveKey: string | string[] = defaultActiveKey;
    if (activeKey) {
        currentActiveKey = activeKey;
    }
    const [activeItems, setActiveItems] = useState<string[]>(toArray(currentActiveKey));
    const cls = classNames(
        prefixCls,
        className,
        { [`${prefixCls}_borderless`]: !bordered },
    );

    const _itemClickCallback = (itemKey: string) => {
        let items = activeItems;
        if (accordion) {
            items = items[0] === itemKey ? [] : [itemKey];
        } else {
            items = [...activeItems];
            const index = items.indexOf(itemKey);
            const isActive = index > -1;
            if (isActive) { // remove active state
                items.splice(index, 1);
            } else {
                items.push(itemKey);
            }
        }
        updateActiveItems(items);
    };

    const updateActiveItems = (items: string[]) => {
        if (!('activeKey' in props)) { // only for defaultKey
            setActiveItems(items);
        }
        onChange(items);
    };

    useEffect(() => {
        // Update state from updated props
        activeKey && setActiveItems(toArray(activeKey));
    });

    return (
        <div className={cls} style={style}>
            {React.Children.map(children, (child: React.ReactElement<CollapsePanelProps>) => {
                const itemProps: CollapsePanelProps = {
                    ...child.props,
                    deletable,
                    showArrow,
                    isActive: activeItems.includes(child.props.itemKey),
                    onItemClick: _itemClickCallback,
                };
                return React.cloneElement(child, itemProps);
            })}
        </div>
    );
};

Collapse.defaultProps = defaultProps;

Collapse.Panel = CollapsePanel;

export default Collapse;
