import React from 'react';
import { ButtonGroupProps, ButtonType } from '../button/types';
import { DropdownPlacement, DropdownTrigger } from '../dropdown/types';
import { MenuProps } from '../menu/types';
import { SizeType } from '../_utils/props';

export interface SplitButtonProps extends Omit<ButtonGroupProps, 'onClick'> {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  loading?: boolean;
  disabled?: boolean;
  size?: SizeType;
  btnType?: ButtonType;
  overlay?: React.ReactElement<MenuProps>;
  dropdownTrigger?: DropdownTrigger;
  dropdownPlacement?: DropdownPlacement;
}
