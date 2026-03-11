import React from 'react';
import { BaseProps, SizeType } from '../_utils/props';

export interface SegmentedOption {
  label: React.ReactNode;
  value: string | number;
  disabled?: boolean;
  icon?: React.ReactNode;
}

export type SegmentedValue = string | number;

export interface SegmentedProps
  extends BaseProps,
    Omit<React.PropsWithoutRef<JSX.IntrinsicElements['div']>, 'onChange'> {
  options: (string | number | SegmentedOption)[];
  value?: SegmentedValue;
  defaultValue?: SegmentedValue;
  onChange?: (value: SegmentedValue) => void;
  block?: boolean;
  disabled?: boolean;
  size?: SizeType;
}
