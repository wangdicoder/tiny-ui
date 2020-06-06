import FormInstance, { FormValues } from './form-instance';

export default function useForm(initialValues: FormValues = {}): [FormInstance] {
  return [new FormInstance(initialValues)];
}
