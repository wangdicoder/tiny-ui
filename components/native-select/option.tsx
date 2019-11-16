import React from 'react';

export interface NativeSelectOptionProps {
  label?: string;
  disabled?: boolean;
  selected?: boolean;
  value?: string;
  children?: React.ReactNode;
}

const Option = (props: NativeSelectOptionProps): React.ReactElement => {
  const { label, disabled, value, selected, ...restProps } = props;
  return (
    <option label={label} disabled={disabled} value={value} selected={selected} {...restProps}>
      {props.children}
    </option>
  );
};

export default Option;
