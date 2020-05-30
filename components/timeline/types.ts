import React, { CSSProperties } from 'react';
import { BaseProps } from '../_utils/props';

export type TimelinePosition = 'left' | 'center';

export interface TimelineProps
  extends BaseProps,
    React.PropsWithoutRef<JSX.IntrinsicElements['ul']> {
  position?: TimelinePosition;
  children: React.ReactNode;
}

export interface TimelineItemProps
  extends BaseProps,
    React.PropsWithoutRef<JSX.IntrinsicElements['li']> {
  dot?: React.ReactNode;
  dotStyle?: CSSProperties;
  children?: React.ReactNode;
}
