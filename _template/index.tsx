import React, { useContext } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../components/config-provider/config-context';
import { getPrefixCls } from '../components/_utils/general';

export interface XProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const X = (props: XProps): React.ReactElement => {
  const { className, style, children, prefixCls: customisedCls } = props;
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('X', configContext.prefixCls, customisedCls);
  const cls = classNames(prefixCls, className);

  return (
    <div className={cls} style={style}>
      {children}
    </div>
  );
};

X.displayName = 'X';

export default X;
