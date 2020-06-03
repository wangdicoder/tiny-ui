import { useMemo } from 'react';
import FormInstance from './form-instance';

export default function useForm(): FormInstance {
  return useMemo(() => new FormInstance(), []);
}
