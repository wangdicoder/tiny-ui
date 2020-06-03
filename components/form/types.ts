import { BaseProps } from '../_utils/props';
import React from 'react';
import FormStore, { FormValues } from './form-store';

export type Rule = {
  // specific type
  type?: 'string' | 'number' | 'boolean';

  // error message. auto generate by template if not provided
  message?: string;

  // type required: max length of string, number, array
  max?: number;

  // type required: min length of string, number, array
  min?: number;

  // required field
  required?: boolean;

  // match enum value
  enum?: any[];

  // length of string, number, array
  len?: number;

  // regex pattern
  pattern?: string;

  // transform value to the rule before validation
  transform?: (value: any) => any;

  // customize validation rule.
  validator?: (value: any) => Promise<any>;

  // failed if only has whitespace
  whitespace?: boolean;
};

export type ValidateTrigger = 'onChange' | 'onBlur' | 'onSubmit';

export interface FormItemProps extends BaseProps {
  name: string;
  required?: boolean;
  colon?: boolean;
  label?: React.ReactNode;
  rules?: Rule[];
  helper?: React.ReactNode;
  notice?: React.ReactNode;
  valuePropName?: string;
  valueGetter?: (...args: any[]) => any;
  validateTrigger?: ValidateTrigger;
  children?: React.ReactNode;
}

export interface FormProps extends BaseProps, React.PropsWithRef<JSX.IntrinsicElements['form']> {
  form?: FormStore;
  initialValues?: FormValues;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
}
