import React from 'react';
import { BaseProps } from '../_utils/props';

export interface SelectOptGroupProps
  extends BaseProps,
    React.PropsWithoutRef<JSX.IntrinsicElements['li']> {
  label?: string;
  children?: React.ReactNode;
}

export interface SelectOptionsProps
  extends BaseProps,
    React.PropsWithoutRef<JSX.IntrinsicElements['li']> {
  value: string;
  disabled?: boolean;
  children?: React.ReactNode;
}

export type SelectValue = string | string[];

export interface SelectProps
  extends BaseProps,
    Omit<React.PropsWithoutRef<JSX.IntrinsicElements['div']>, 'onSelect'> {
  value?: SelectValue;
  defaultValue?: SelectValue;
  onSelect?: (value: SelectValue) => void;
  placeholder?: string;
  disabled?: boolean;
  defaultOpen?: boolean;
  open?: boolean;
  onDropdownVisibleChange?: (open: boolean) => void;
  dropdownStyle?: React.CSSProperties;
  children?: React.ReactNode;
}
