import React from 'react';
import { BaseProps } from '../_utils/props';

export interface CopyToClipboardProps
  extends BaseProps,
    React.PropsWithoutRef<JSX.IntrinsicElements['span']> {
  text: string;
  children?: React.ReactNode;
}
