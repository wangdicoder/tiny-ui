import Input from './input';
import InputGroup from './input-group';
import InputGroupAddon from './input-group-addon';

export { InputProps, InputSizes } from './input';
export { InputGroupProps } from './input-group';
export { InputGroupAddonProps } from './input-group-addon';

Input.displayName = 'Input';
Input.Group = InputGroup;
Input.Addon = InputGroupAddon;
export default Input;
