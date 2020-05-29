import { BaseProps } from '../_utils/props';
import React from 'react';

export type RowAlign = 'top' | 'center' | 'bottom';
export type RowJustify = 'start' | 'end' | 'center' | 'space-around' | 'space-between';

export interface RowProps extends BaseProps, React.PropsWithoutRef<JSX.IntrinsicElements['div']> {
  gutter?: number | [number, number];
  // | { xs: number; sm: number; md: number; lg: number; xl: number; xxl: number };
  /** gutter padding includes first and end child  */
  gutterSide?: boolean;
  align?: RowAlign;
  justify?: RowJustify;
  children: React.ReactElement<ColProps>[];
}

export type ColSize = {
  span?: number;
  offset?: number;
  order?: number;
};

export interface ColProps extends BaseProps, React.PropsWithoutRef<JSX.IntrinsicElements['div']> {
  span?: number;
  offset?: number;
  order?: number;
  xs?: number | ColSize;
  sm?: number | ColSize;
  md?: number | ColSize;
  lg?: number | ColSize;
  xl?: number | ColSize;
  xxl?: number | ColSize;
  children?: React.ReactNode;
}
