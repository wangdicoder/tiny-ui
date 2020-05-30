import React from 'react';
import { BaseProps } from '../_utils/props';

export interface SkeletonProps extends BaseProps, React.PropsWithRef<JSX.IntrinsicElements['div']> {
  active?: boolean;
  rounded?: boolean;
  children?: React.ReactNode;
}
