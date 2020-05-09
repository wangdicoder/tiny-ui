import React, { useContext, useEffect } from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';

export interface SplitPaneProps extends BaseProps {
  min?: number;
  getMin?: (min: number) => void;
  children?: React.ReactNode;
}

const SplitPane = (props: SplitPaneProps): React.ReactElement => {
  const { prefixCls: customisedCls, min, getMin, className, style, children } = props;
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('split-pane', configContext.prefixCls, customisedCls);
  const cls = classNames(prefixCls, className);

  useEffect(() => {
    getMin && getMin(min || 40);
  }, []);

  return (
    <div className={cls} style={style}>
      {children}
    </div>
  );
};

export default SplitPane;
