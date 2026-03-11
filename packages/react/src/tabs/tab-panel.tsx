import { useContext } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { TabPanelProps } from './types';

const TabPanel = (props: TabPanelProps): React.ReactElement => {
  const {
    active,
    forceRender,
    className,
    children,
    prefixCls: customisedCls,
    ...otherProps
  } = props;
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('tabs-panel', configContext.prefixCls, customisedCls);
  const cls = classNames(prefixCls, className, {
    [`${prefixCls}_active`]: active,
  });

  if (!active && !forceRender) {
    return <div className={cls} />;
  }

  return (
    <div className={cls} role="tabpanel" {...otherProps}>
      {children}
    </div>
  );
};

TabPanel.displayName = 'TabPanel';

export default TabPanel;
