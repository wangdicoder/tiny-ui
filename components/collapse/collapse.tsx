import React, { useState, useEffect, useContext } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { CollapsePanelProps, CollapseProps } from './types';

/**
 * Format active key to array
 * @param activeKey
 */
const toArray = (activeKey: string | string[]): string[] => {
  return Array.isArray(activeKey) ? activeKey : [activeKey];
};

const Collapse = (props: CollapseProps): React.ReactElement => {
  const {
    showArrow = true,
    bordered = true,
    deletable = false,
    accordion = false,
    defaultActiveKey = [],
    duration = 300,
    prefixCls: customisedCls,
    activeKey,
    onChange,
    className,
    style,
    children,
  } = props;
  let currentActiveKey: string | string[] = defaultActiveKey;
  if (activeKey) {
    currentActiveKey = activeKey;
  }
  const [activeItems, setActiveItems] = useState<string[]>(toArray(currentActiveKey));
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('collapse', configContext.prefixCls, customisedCls);
  const cls = classNames(prefixCls, className, {
    [`${prefixCls}_borderless`]: !bordered,
  });

  const updateActiveItems = (items: string[]) => {
    if (!('activeKey' in props)) {
      // only for defaultKey
      setActiveItems(items);
    }
    onChange && onChange(items);
  };

  const itemClickCallback = (itemKey: string) => {
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
    updateActiveItems(items);
  };

  useEffect(() => {
    // Update state from updated props
    activeKey && setActiveItems(toArray(activeKey));
  }, [activeKey]);

  return (
    <div className={cls} style={style}>
      {React.Children.map(children, (child) => {
        const itemProps: Partial<CollapsePanelProps> = {
          duration,
          deletable,
          showArrow,
          isActive: activeItems.includes(child.props.itemKey),
          onItemClick: itemClickCallback,
        };
        return React.cloneElement(child, itemProps);
      })}
    </div>
  );
};

Collapse.displayName = 'Collapse';

export default Collapse;
