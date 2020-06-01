import React from 'react';
import { BaseProps, DirectionType, SizeType } from '../_utils/props';

export interface DescriptionsProps
  extends BaseProps,
    Omit<React.PropsWithRef<JSX.IntrinsicElements['div']>, 'title'> {
  title?: React.ReactNode;
  bordered?: boolean;
  column?: number;
  size?: SizeType;
  layout?: DirectionType;
  colon?: boolean;
}

export interface DescriptionsItemProps extends BaseProps {
  label?: React.ReactNode;
  span?: number;
  children: React.ReactNode;
}
