import React from 'react';
import Split, { SplitProps } from './split';
import SplitPane from './split-pane';

export { SplitProps } from './split';
export { SplitPaneProps } from './split-pane';
export { SplitMode } from './shared-props';

type ISplit = React.FC<SplitProps> & {
  Pane?: typeof SplitPane;
};

const DefaultSplit = Split as ISplit;
DefaultSplit.Pane = SplitPane;

export default DefaultSplit;
