import React from 'react';
import Checkbox, { CheckboxProps } from './checkbox';
import CheckboxGroup, { CheckboxGroupProps } from './checkbox-group';

export { CheckboxProps, CheckboxGroupProps };

type ICheckbox = React.FC<CheckboxProps> & {
  Group: typeof CheckboxGroup;
};

const defaultCheckbox = Checkbox as ICheckbox;
defaultCheckbox.Group = CheckboxGroup;

export default defaultCheckbox;
