import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { CollapsePanelProps } from './collapse-panel';
import { BaseProps } from '../_utils/props';

export interface CollapseProps extends BaseProps {
  defaultActiveKey?: string | string[];
  activeKey?: string | string[];
  duration?: number;
  /** Only open one panel */
  accordion?: boolean;
  /** Allow to delete */
  deletable?: boolean;
  showArrow?: boolean;
  bordered?: boolean;
  onChange?: (keys: string | string[]) => void;
  children: React.ReactElement<CollapsePanelProps>;
}

/**
 * Format active key to array
 * @param activeKey
 */
const toArray = (activeKey: string | string[]) => {
  return Array.isArray(activeKey) ? activeKey : [activeKey];
};

const Collapse: React.FC<CollapseProps> & { Panel?: any } = ({
  prefixCls = 'ty-collapse',
  showArrow = true,
  bordered = true,
  deletable = false,
  accordion = false,
  defaultActiveKey = [],
  duration = 300,
  ...restProps
}: CollapseProps) => {
  const { activeKey, onChange, className, style, children } = restProps;
  let currentActiveKey: string | string[] = defaultActiveKey;
  if (activeKey) {
    currentActiveKey = activeKey;
  }
  const [activeItems, setActiveItems] = useState<string[]>(toArray(currentActiveKey));
  const cls = classNames(prefixCls, className, {
    [`${prefixCls}_borderless`]: !bordered,
  });

  const _itemClickCallback = (itemKey: string) => {
    let items = activeItems;
    if (accordion) {
      items = items[0] === itemKey ? [] : [itemKey];
    } else {
      items = [...activeItems];
      const index = items.indexOf(itemKey);
      const isActive = index > -1;
      if (isActive) {
        // remove active state
        items.splice(index, 1);
      } else {
        items.push(itemKey);
      }
    }
    _updateActiveItems(items);
  };

  const _updateActiveItems = (items: string[]) => {
    if (!('activeKey' in restProps)) {
      // only for defaultKey
      setActiveItems(items);
    }
    onChange && onChange(items);
  };

  useEffect(() => {
    // Update state from updated props
    activeKey && setActiveItems(toArray(activeKey));
  });

  return (
    <div className={cls} style={style}>
      {React.Children.map(children, child => {
        const itemProps: CollapsePanelProps = {
          ...child.props,
          duration,
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

export default Collapse;
