import React from 'react';

export type CardContentProps = {
  prefixCls?: string;
  children: string;
};

const CardContent = (props: CardContentProps): React.ReactElement => {
  const { prefixCls, children } = props;
  return <div className={`${prefixCls}__body`}>{children}</div>;
};

export default CardContent;
