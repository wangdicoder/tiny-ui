import React from 'react';
import { FlipItemProps } from './types';

const FlipItem = (props: FlipItemProps): JSX.Element => {
  const { className, children, ...otherProps } = props;
  return (
    <div {...otherProps} className={className}>
      {children}
    </div>
  );
};

FlipItem.displayName = 'FlipItem';

export default FlipItem;
