import React from 'react';
import { BaseProps, SizeType } from '../_utils/props';

export interface LoaderProps
  extends BaseProps,
    React.PropsWithoutRef<JSX.IntrinsicElements['div']> {
  indicator?: React.ReactNode;
  size?: SizeType;
  /** loading status */
  loading?: boolean;
  tip?: string;
  vertical?: boolean;
  blurred?: boolean;
  children?: React.ReactNode;
}
