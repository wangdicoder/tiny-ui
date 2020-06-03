import Form from './form';
import FormItem from './form-item';
import FormStore from './form-store';
import useForm from './use-form';

type IForm = typeof Form & {
  Item: typeof FormItem;
  FormStore: typeof FormStore;
  useForm: typeof useForm;
};

const DefaultForm = Form as IForm;
DefaultForm.Item = FormItem;
DefaultForm.FormStore = FormStore;
DefaultForm.useForm = useForm;

export default DefaultForm;
