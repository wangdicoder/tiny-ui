import Split, { SplitProps } from './split';
import SplitPane, { SplitPaneProps } from './split-pane';
import { SplitMode } from './shared-props';

export { SplitProps, SplitPaneProps, SplitMode };

type ISplit = typeof Split & {
  Pane?: typeof SplitPane;
};

const DefaultSplit = Split as ISplit;
DefaultSplit.Pane = SplitPane;

export default DefaultSplit;
