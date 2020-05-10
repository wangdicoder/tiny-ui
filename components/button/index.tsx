import Button, { ButtonProps, ButtonType } from './button';
import ButtonGroup, { ButtonGroupProps } from './button-group';
import { SizeType as ButtonSize } from '../_utils/props';

export { ButtonProps, ButtonSize, ButtonType, ButtonGroupProps };

type IButton = typeof Button & {
  Group: typeof ButtonGroup;
};

const DefaultButton = Button as IButton;
DefaultButton.Group = ButtonGroup;

export default DefaultButton;
