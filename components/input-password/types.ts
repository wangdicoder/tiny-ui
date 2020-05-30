import React from 'react';
import { InputProps } from '../input/types';

export interface InputPasswordProps extends InputProps {
  suffix?: boolean;
  visibleOnClick?: () => void;
  children?: React.ReactNode;
}
