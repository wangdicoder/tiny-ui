import React from 'react';
import { BaseProps } from '../_utils/props';
import { MenuProps } from '../menu/types';

export type DropdownTrigger = 'click' | 'hover' | 'contextmenu';
export type DropdownPlacement =
  | 'top-start'
  | 'top'
  | 'top-end'
  | 'bottom-start'
  | 'bottom'
  | 'bottom-end';

export interface DropdownProps extends BaseProps {
  disabled?: boolean;
  trigger?: DropdownTrigger;
  placement?: DropdownPlacement;
  overlay?: React.ReactElement<MenuProps>;
  visible?: boolean;
  onVisibleChange?: (visible: boolean) => void;
  children: React.ReactElement;
}
