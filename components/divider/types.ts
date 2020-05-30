import React from 'react';
import { BaseProps, DirectionType } from '../_utils/props';

export type DivideAlign = 'left' | 'right' | 'center';

export interface DividerProps
  extends BaseProps,
    React.PropsWithoutRef<JSX.IntrinsicElements['div']> {
  type?: DirectionType;
  dashed?: boolean;
  align?: DivideAlign;
  children?: React.ReactNode;
}
