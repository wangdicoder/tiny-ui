import React, { useContext } from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';

export interface TabPanelProps extends BaseProps, React.PropsWithRef<JSX.IntrinsicElements['div']> {
  selected?: boolean;
  disabled?: boolean;
  closable?: boolean;
  tab?: React.ReactNode;
}

const TabPanel = React.forwardRef<HTMLDivElement, TabPanelProps>(
  (props: TabPanelProps, ref): React.ReactElement => {
    const { className, selected, children, prefixCls: customisedCls, ...otherProps } = props;
    const configContext = useContext(ConfigContext);
    const prefixCls = getPrefixCls('tabs-panel-item', configContext.prefixCls, customisedCls);
    const cls = classNames(prefixCls, className, {
      [`${prefixCls}_active`]: selected,
    });

    return (
      <div ref={ref} className={cls} {...otherProps}>
        {children}
      </div>
    );
  }
);

TabPanel.displayName = 'TabPanel';

export default TabPanel;
