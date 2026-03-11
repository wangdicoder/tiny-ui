import React, { CSSProperties, ReactNode } from 'react';
import { BaseProps } from '../_utils/props';

export interface EmptyProps extends BaseProps, React.PropsWithoutRef<JSX.IntrinsicElements['div']> {
  image?: string | ReactNode;
  imageStyle?: CSSProperties;
  description?: boolean | string | React.ReactNode;
  descStyle?: CSSProperties;
  children?: React.ReactNode;
}
