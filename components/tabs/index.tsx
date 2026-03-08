import Tabs from './tabs';
import TabPanel from './tab-panel';

export type { TabsProps, TabItem, TabType, TabPosition, TabPanelProps } from './types';

type ITabs = typeof Tabs & {
  Panel: typeof TabPanel;
};

const DefaultTabs = Tabs as ITabs;
DefaultTabs.Panel = TabPanel;

export default DefaultTabs;
