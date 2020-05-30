import React from 'react';
import { PopupProps } from '../popup/types';

export interface PopoverProps extends Omit<PopupProps, 'title'> {
  role?: string;
  title?: React.ReactNode;
  children: React.ReactElement;
}
