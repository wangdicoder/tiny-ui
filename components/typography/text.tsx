import React from 'react';

export interface TextProps {
  code?: boolean;
  del?: boolean;
  disabled?: boolean;
  underline?: boolean;
  strong?: boolean;
  italic?: boolean;
  mark?: boolean;
  sub?: boolean;
  sup?: boolean;
  children: React.ReactNode;
}

const Text = (props: TextProps): React.ReactElement => {
  const { children } = props;
  return React.createElement('strong', null, children);
};

export default Text;
