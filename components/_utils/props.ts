import { CSSProperties } from 'react';

export type SizeType = 'sm' | 'md' | 'lg';
export type DirectionType = 'horizontal' | 'vertical';

export type BaseProps = {
  style?: CSSProperties;
  className?: string;
  prefixCls?: string;
};
