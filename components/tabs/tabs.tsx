import React from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';
import { TabPaneProps } from './tab-pane';

export type TabType = 'line' | 'card';

export interface TabsProps extends BaseProps {
  activeKey?: string;
  defaultActiveKey?: string;
  type?: TabType;
  animated?: boolean;
  onChange?: (activeKey: string) => void;
  children?: React.ReactElement<TabPaneProps>;
}

const Tabs: React.FC<TabsProps> & { TabPane?: any } = (props: TabsProps): React.ReactElement => {
  const { prefixCls = 'ty-tabs', className, style, children } = props;
  const cls = classNames(prefixCls, className);
  // const [activeKey, setActiveKey] = 'activeKey' in props ? props.activeKey : props.defaultActiveKey;

  return (
    <div className={cls} style={style}>
      {children}
    </div>
  );
};

export default Tabs;
