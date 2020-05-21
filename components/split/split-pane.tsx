import React, { useContext } from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { SplitContext } from './split-context';

export interface SplitPaneProps
  extends BaseProps,
    React.PropsWithRef<JSX.IntrinsicElements['div']> {
  size?: number | string;
}

const SplitPane = React.forwardRef<HTMLDivElement, SplitPaneProps>(
  (props: SplitPaneProps, ref): JSX.Element => {
    const { size, className, style, children, prefixCls: customisedCls, ...otherProps } = props;
    const configContext = useContext(ConfigContext);
    const prefixCls = getPrefixCls('split-pane', configContext.prefixCls, customisedCls);
    const cls = classNames(prefixCls, className);
    const { mode } = useContext(SplitContext);

    const paneStyle: React.CSSProperties = {
      ...style,
    };
    if (mode === 'vertical') {
      paneStyle.width = size;
    } else {
      paneStyle.height = size;
    }

    return (
      <div ref={ref} {...otherProps} className={cls} style={paneStyle}>
        {children}
      </div>
    );
  }
);

SplitPane.displayName = 'SplitPane';

export default SplitPane;
