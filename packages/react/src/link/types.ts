import React from 'react';
import { BaseProps } from '../_utils/props';

export interface LinkProps extends BaseProps, React.PropsWithRef<JSX.IntrinsicElements['a']> {
  external?: boolean;
  disabled?: boolean;
  underline?: boolean;
  children?: React.ReactNode;
}
