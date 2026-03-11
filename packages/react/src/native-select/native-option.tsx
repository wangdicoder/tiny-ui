import React from 'react';
import { NativeSelectOptionProps } from './types';

const NativeOption = React.forwardRef<HTMLOptionElement, NativeSelectOptionProps>(
  (props: NativeSelectOptionProps, ref): React.ReactElement => {
    return <option ref={ref} {...props} />;
  }
);

NativeOption.displayName = 'NativeOption';

export default NativeOption;
