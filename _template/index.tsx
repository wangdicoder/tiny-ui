import React from 'react';
import classNames from 'classnames';

export interface XProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const X = (props: XProps): React.ReactElement => {
  const { prefixCls, className, style, children } = props;
  const cls = classNames(prefixCls, className);

  return (
    <div className={cls} style={style}>
      {children}
    </div>
  );
};

X.displayName = 'X';

export default X;
