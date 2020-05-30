import React from 'react';
import { BaseProps } from '../_utils/props';

export interface LoadingBarProps
  extends BaseProps,
    React.PropsWithoutRef<JSX.IntrinsicElements['div']> {
  didMount?: () => void;
  children?: React.ReactNode;
}
