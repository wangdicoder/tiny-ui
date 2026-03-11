import React from 'react';
import { BaseProps, SizeType } from '../_utils/props';

export type ButtonType =
  | 'default'
  | 'primary'
  | 'outline'
  | 'ghost'
  | 'link'
  | 'info'
  | 'danger'
  | 'warning'
  | 'success';

export interface ButtonProps
  extends BaseProps,
    React.PropsWithRef<JSX.IntrinsicElements['button']> {
  btnType?: ButtonType;
  loading?: boolean;
  disabled?: boolean;
  block?: boolean;
  size?: SizeType;
  round?: boolean;
  icon?: React.ReactNode;
}

export interface ButtonGroupProps
  extends BaseProps,
    React.PropsWithRef<JSX.IntrinsicElements['div']> {
  btnType?: ButtonType;
  size?: SizeType;
  round?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}
