import { CSSProperties } from 'react';

export type BaseProps = {
  style?: CSSProperties;
  className?: string;
  prefixCls?: string;
};

export type SizeType = 'sm' | 'md' | 'lg';
