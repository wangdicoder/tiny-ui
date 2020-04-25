import React from 'react';
import { BaseProps } from '../_utils/props';

export interface FlipItemProps
  extends BaseProps,
    React.PropsWithoutRef<JSX.IntrinsicElements['div']> {
  children?: React.ReactNode;
}

const FlipItem = (props: FlipItemProps): React.ReactElement => {
  const { className, children, style, ...otherProps } = props;
  return (
    <div {...otherProps} className={className} style={style}>
      {children}
    </div>
  );
};

FlipItem.displayName = 'FlipItem';

export default FlipItem;
