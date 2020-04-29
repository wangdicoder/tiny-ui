import React from 'react';

export type NativeSelectGroupProps = React.PropsWithRef<JSX.IntrinsicElements['optgroup']>;

const NativeOptGroup = React.forwardRef<HTMLOptGroupElement, NativeSelectGroupProps>(
  (props: NativeSelectGroupProps, ref): React.ReactElement => {
    return (
      <optgroup ref={ref} {...props}>
        {props.children}
      </optgroup>
    );
  }
);

NativeOptGroup.displayName = 'NativeSelectOptGroup';

export default NativeOptGroup;
