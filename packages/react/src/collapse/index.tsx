import Collapse from './collapse';
import CollapsePanel from './collapse-panel';

type ICollapse = typeof Collapse & {
  Panel: typeof CollapsePanel;
};

const DefaultCollapse = Collapse as ICollapse;
DefaultCollapse.Panel = CollapsePanel;

export default DefaultCollapse;
