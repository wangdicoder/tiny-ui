import { CSSProperties } from 'react';

export type BaseProps = {
  style?: CSSProperties;
  className?: string;
  prefixCls?: string;
};

export type Size = 'sm' | 'md' | 'lg';

export type Color = 'primary' | 'blue' | 'red' | 'yellow' | 'green';
