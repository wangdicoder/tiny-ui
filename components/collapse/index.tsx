import Collapse, { CollapseProps } from './collapse';
import CollapsePanel, { CollapsePanelProps } from './collapse-panel';

export { CollapseProps, CollapsePanelProps };

type ICollapse = typeof Collapse & {
  Panel: typeof CollapsePanel;
};

const DefaultCollapse = Collapse as ICollapse;
DefaultCollapse.Panel = CollapsePanel;

export default DefaultCollapse;
