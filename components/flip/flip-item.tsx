import React from 'react';
import { BaseProps } from '../_utils/props';

export interface FlipItemProps extends BaseProps {
  children?: React.ReactNode;
}

const FlipItem = (props: FlipItemProps) => {
  const { className, children, style } = props;
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};

export default FlipItem;
