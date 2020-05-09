import React from 'react';
import Form, { FormProps } from './form';
import FormItem from './form-item';
import FormStore from './form-store';

export { FormProps } from './form';
export { FormItemProps } from './form-item';

type IForm = React.FC<FormProps> & {
  Item: typeof FormItem;
  FormStore: typeof FormStore;
};

const DefaultForm = Form as IForm;
DefaultForm.Item = FormItem;
DefaultForm.FormStore = FormStore;

export default DefaultForm;
