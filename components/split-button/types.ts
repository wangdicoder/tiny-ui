import React from 'react';
import { ButtonGroupProps } from '../button/types';
import { DropdownTrigger } from '../dropdown/types';
import { MenuProps } from '../menu/types';

export interface SplitButtonProps extends ButtonGroupProps {
  overlay?: React.ReactElement<MenuProps>;
  dropdownTrigger?: DropdownTrigger;
}
