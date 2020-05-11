import Form, { FormProps } from './form';
import FormItem, { FormItemProps } from './form-item';
import FormStore from './form-store';

export { FormProps, FormItemProps };

type IForm = typeof Form & {
  Item: typeof FormItem;
  FormStore: typeof FormStore;
};

const DefaultForm = Form as IForm;
DefaultForm.Item = FormItem;
DefaultForm.FormStore = FormStore;

export default DefaultForm;
