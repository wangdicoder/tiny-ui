import React from 'react';
import { BaseProps } from '../_utils/props';

export interface StatisticProps
  extends BaseProps,
    Omit<React.PropsWithoutRef<JSX.IntrinsicElements['div']>, 'title' | 'prefix'> {
  title?: React.ReactNode;
  value?: number | string;
  precision?: number;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  groupSeparator?: string;
  valueStyle?: React.CSSProperties;
  formatter?: (value: number | string) => React.ReactNode;
}
