import React from 'react';
import { BaseProps } from '../_utils/props';

export type PaginationAlign = 'left' | 'center' | 'right';

export interface PaginationProps
  extends BaseProps,
    Omit<React.PropsWithoutRef<JSX.IntrinsicElements['ul']>, 'onChange'> {
  current?: number;
  total?: number;
  defaultCurrent?: number;
  disabled?: boolean;
  pageSize?: number;
  defaultPageSize?: number;
  size?: 'sm' | 'md';
  align?: PaginationAlign;
  onChange?: (current: number, total: number, pageSize: number) => void;
}
