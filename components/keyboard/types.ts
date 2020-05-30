import React from 'react';
import { BaseProps } from '../_utils/props';

export interface KeyboardProps extends BaseProps, React.PropsWithRef<JSX.IntrinsicElements['kbd']> {
  children?: React.ReactNode;
}
