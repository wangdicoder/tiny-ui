import React from 'react';
import { BaseProps } from '../_utils/props';

export interface ImageProps extends BaseProps, React.PropsWithoutRef<JSX.IntrinsicElements['img']> {
  src?: string;
  placeholder?: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
  round?: boolean;
  lazy?: boolean;
  fallback?: string;
  objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
}
