import React from 'react';
import Checkbox, { CheckboxProps } from './checkbox';
import CheckboxGroup, { CheckboxGroupProps } from './checkbox-group';

export { CheckboxProps, CheckboxGroupProps };

type ICheckbox = React.FC<CheckboxProps> & {
  Group: typeof CheckboxGroup;
};

const DefaultCheckbox = Checkbox as ICheckbox;
DefaultCheckbox.Group = CheckboxGroup;

export default DefaultCheckbox;
