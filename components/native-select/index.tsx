import React from 'react';
import NativeSelect, { NativeSelectProps, NativeSelectSize } from './native-select';
import NativeOption from './native-option';
import NativeOptGroup from './native-opt-group';

export { NativeSelectSize };

type ISelect = React.ForwardRefExoticComponent<NativeSelectProps> & {
  Option: typeof NativeOption;
  OptGroup: typeof NativeOptGroup;
};

const DefaultSelect = NativeSelect as ISelect;
DefaultSelect.Option = NativeOption;
DefaultSelect.OptGroup = NativeOptGroup;

export default DefaultSelect;
