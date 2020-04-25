import React from 'react';

export interface CardContentProps extends React.PropsWithoutRef<JSX.IntrinsicElements['div']> {
  prefixCls?: string;
  children: string;
}

const CardContent = (props: CardContentProps): React.ReactElement => {
  const { prefixCls, children } = props;
  return <div className={`${prefixCls}__body`}>{children}</div>;
};

CardContent.displayName = 'CardContent';

export default CardContent;
