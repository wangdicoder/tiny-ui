import React from 'react';
import { CardContentProps } from './types';

const CardContent = (props: CardContentProps): React.ReactElement => {
  const { prefixCls, children, ...otherProps } = props;
  return (
    <div {...otherProps} className={`${prefixCls}__body`}>
      {children}
    </div>
  );
};

CardContent.displayName = 'CardContent';

export default CardContent;
