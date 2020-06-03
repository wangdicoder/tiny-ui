import React from 'react';
import { FormOptionsProps } from './types';

export const FormOptionsContext = React.createContext<FormOptionsProps>({
  labelCol: 8,
  wrapperCol: 16,
});
