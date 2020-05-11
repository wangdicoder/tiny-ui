import NativeSelect, { NativeSelectProps, NativeSelectSize } from './native-select';
import NativeOption, { NativeSelectOptionProps } from './native-option';
import NativeOptGroup, { NativeSelectGroupProps } from './native-opt-group';

export { NativeSelectSize, NativeSelectProps, NativeSelectOptionProps, NativeSelectGroupProps };

type ISelect = typeof NativeSelect & {
  Option: typeof NativeOption;
  OptGroup: typeof NativeOptGroup;
};

const DefaultSelect = NativeSelect as ISelect;
DefaultSelect.Option = NativeOption;
DefaultSelect.OptGroup = NativeOptGroup;

export default DefaultSelect;
