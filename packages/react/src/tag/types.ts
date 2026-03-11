import React from 'react';
import { BaseProps } from '../_utils/props';

export interface CheckableTagProps extends BaseProps {
  defaultChecked?: boolean;
  checked?: boolean;
  onChange?: (checked: boolean, e: React.MouseEvent) => void;
  children?: React.ReactNode;
}

export const PresetColors = [
  'magenta',
  'red',
  'volcano',
  'orange',
  'gold',
  'lime',
  'green',
  'cyan',
  'blue',
  'geekblue',
  'purple',
];

export interface TagProps extends BaseProps, React.PropsWithoutRef<JSX.IntrinsicElements['div']> {
  color?: string;
  closable?: boolean;
  onClose?: React.MouseEventHandler;
  onClick?: React.MouseEventHandler;
  defaultVisible?: boolean;
  visible?: boolean;
  children?: React.ReactNode;
}
