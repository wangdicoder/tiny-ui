import React from 'react';
import { BaseProps } from '../_utils/props';

export interface FlipItemProps
  extends Omit<BaseProps, 'prefixCls'>,
    React.PropsWithoutRef<JSX.IntrinsicElements['div']> {
  children?: React.ReactNode;
}

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
