import Tabs, { TabsProps } from './tabs';
import TabPanel, { TabPanelProps } from './tab-panel';

export { TabsProps, TabPanelProps };

type ITabs = typeof Tabs & {
  Panel: typeof TabPanel;
};

const DefaultTabs = Tabs as ITabs;

DefaultTabs.Panel = TabPanel;
export default DefaultTabs;
