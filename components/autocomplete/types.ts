import { InputProps } from '../input/types';

export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
  options?: (option: string) => string[];
  onSelect?: (item: string) => void;
}
