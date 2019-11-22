import React from 'react';
import { BaseProps } from '../_utils/props';

export type DotPosition = 'top' | 'bottom' | 'left' | 'right';

export interface DotGroupProps extends BaseProps {
  position: DotPosition;
}

const DotGroup = ({ position }: DotGroupProps) => {
  return (
    <ul>
      <li></li>
    </ul>
  );
};

export default DotGroup;
