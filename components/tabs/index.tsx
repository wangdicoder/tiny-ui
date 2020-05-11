import Tabs, { TabsProps } from './tabs';
import TabPane, { TabPaneProps } from './tab-pane';

export { TabsProps, TabPaneProps };

type ITabs = typeof Tabs & {
  Pane: typeof TabPane;
};

const DefaultTabs = Tabs as ITabs;

DefaultTabs.Pane = TabPane;
export default DefaultTabs;
