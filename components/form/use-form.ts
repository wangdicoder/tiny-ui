import { useMemo } from 'react';
import FormStore from './form-store';

export default function useForm(): FormStore {
  return useMemo(() => new FormStore(), []);
}
