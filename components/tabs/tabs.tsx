import React, { useContext } from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';
import { TabPaneProps } from './tab-pane';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';

export type TabType = 'line' | 'card';

export interface TabsProps extends BaseProps {
  activeKey?: string;
  defaultActiveKey?: string;
  type?: TabType;
  animated?: boolean;
  onChange?: (activeKey: string) => void;
  children?: React.ReactElement<TabPaneProps>;
}

const Tabs = (props: TabsProps): React.ReactElement => {
  const { className, style, children, prefixCls: customisedCls } = props;
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('tabs', configContext.prefixCls, customisedCls);
  const cls = classNames(prefixCls, className);
  // const [activeKey, setActiveKey] = 'activeKey' in props ? props.activeKey : props.defaultActiveKey;

  return (
    <div className={cls} style={style}>
      {children}
    </div>
  );
};

Tabs.displayName = 'Tab';

export default Tabs;
