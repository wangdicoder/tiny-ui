import React from 'react';

export interface NativeSelectGroupProps {
  label?: string;
  disabled?: boolean;
  children?: React.ReactNode;
}

const Group = ({ label, disabled, children, ...restProps }: NativeSelectGroupProps) => (
  <optgroup label={label} disabled={disabled} {...restProps}>
    {children}
  </optgroup>
);

export default Group;
