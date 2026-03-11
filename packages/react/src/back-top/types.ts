import React from 'react';
import { BaseProps } from '../_utils/props';
import { Target } from '../_utils/dom';

export interface BackTopProps extends BaseProps {
  target?: () => Target;
  onClick?: (e: React.MouseEvent) => void;
  visibilityHeight?: number;
  children?: React.ReactNode;
}
