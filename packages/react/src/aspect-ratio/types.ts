import React from 'react';
import { BaseProps } from '../_utils/props';

export interface AspectRatioProps
  extends BaseProps,
    React.PropsWithoutRef<JSX.IntrinsicElements['div']> {
  /** the width of the content */
  width?: number | string;

  /** the aspect ratio of the content */
  ratio?: number;
}
