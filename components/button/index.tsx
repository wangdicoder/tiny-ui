import React from 'react';
import Button, { ButtonProps, ButtonColor } from './button';
import ButtonGroup, { ButtonGroupProps } from './button-group';
import { SizeType as ButtonSize } from '../_utils/props';

export { ButtonProps, ButtonColor, ButtonSize };
export { ButtonGroupProps };

type IButton = React.ForwardRefExoticComponent<ButtonProps> & {
  Group: typeof ButtonGroup;
};

const DefaultButton = Button as IButton;
DefaultButton.Group = ButtonGroup;

export default DefaultButton;
