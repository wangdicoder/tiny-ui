import Form from './form';
import FormItem from './form-item';
import useForm from './use-form';

type IForm = typeof Form & {
  Item: typeof FormItem;
  useForm: typeof useForm;
};

const DefaultForm = Form as IForm;
DefaultForm.Item = FormItem;
DefaultForm.useForm = useForm;

export default DefaultForm;
