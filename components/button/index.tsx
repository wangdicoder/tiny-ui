import Button, { ButtonProps, ButtonColor } from './button';
import ButtonGroup, { ButtonGroupProps } from './button-group';

export { ButtonProps, ButtonColor };
export { ButtonGroupProps };

ButtonGroup.displayName = 'ButtonGroup';
Button.displayName = 'Button';
Button.Group = ButtonGroup;

export default Button;
