import { CSSProperties } from 'react';

export type SizeType = 'sm' | 'md' | 'lg';

export type BaseProps = {
  style?: CSSProperties;
  className?: string;
  prefixCls?: string;
};
