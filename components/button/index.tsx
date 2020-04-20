import Button, { ButtonProps, ButtonColor } from './button';
import ButtonGroup, { ButtonGroupProps } from './button-group';
import { SizeType as ButtonSize } from '../_utils/props';

export { ButtonProps, ButtonColor, ButtonSize };
export { ButtonGroupProps };

Button.Group = ButtonGroup;

export default Button;
