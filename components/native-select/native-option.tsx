import React from 'react';

export type NativeSelectOptionProps = React.PropsWithRef<JSX.IntrinsicElements['option']>;

const NativeOption = React.forwardRef<HTMLOptionElement, NativeSelectOptionProps>(
  (props: NativeSelectOptionProps, ref): React.ReactElement => {
    return <option ref={ref} {...props} />;
  }
);

NativeOption.displayName = 'NativeOption';

export default NativeOption;
