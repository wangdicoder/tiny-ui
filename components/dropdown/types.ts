import React from 'react';
import { BaseProps } from '../_utils/props';

export type DropdownTrigger = 'click' | 'hover' | 'contextmenu';
export type DropdownPlacement =
  | 'top-start'
  | 'top'
  | 'top-end'
  | 'bottom-start'
  | 'bottom'
  | 'bottom-end'

export interface DropdownProps extends BaseProps{
  trigger?: DropdownTrigger;
  placement?: DropdownPlacement;
  overlay?: React.ReactElement;
  children: React.ReactElement;
}
