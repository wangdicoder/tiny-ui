import Tabs from './tabs';
import TabPanel from './tab-panel';

export type { TabsProps } from './tabs';
export type { TabPanelProps } from './tab-panel';

type ITabs = typeof Tabs & {
  Panel: typeof TabPanel;
};

const DefaultTabs = Tabs as ITabs;

DefaultTabs.Panel = TabPanel;
export default DefaultTabs;
