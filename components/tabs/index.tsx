import React from 'react';
import Tabs, { TabsProps } from './tabs';
import TabPane from './tab-pane';

export { TabsProps } from './tabs';
export { TabPaneProps } from './tab-pane';

type ITabs = React.FC<TabsProps> & {
  Pane: typeof TabPane;
};

const DefaultTabs = Tabs as ITabs;

DefaultTabs.Pane = TabPane;
export default DefaultTabs;
