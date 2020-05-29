import React from 'react';

export interface IconProps extends React.PropsWithoutRef<JSX.IntrinsicElements['i']> {
  name: string;
  color?: string;
  size?: string | number;
  style?: React.CSSProperties;
  spin?: boolean;
  className?: string;
  prefixCls?: string;
}
