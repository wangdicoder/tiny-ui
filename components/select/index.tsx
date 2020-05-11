import Select, { SelectProps } from './select';
import SelectOption, { SelectOptionsProps } from './option';
import SelectOptGroup, { SelectOptGroupProps } from './opt-group';

export { SelectProps, SelectOptGroupProps, SelectOptionsProps };

type ISelect = typeof Select & {
  Option: typeof SelectOption;
  OptGroup: typeof SelectOptGroup;
};

const DefaultSelect = Select as ISelect;
DefaultSelect.Option = SelectOption;
DefaultSelect.OptGroup = SelectOptGroup;

export default DefaultSelect;
