import React from 'react';
import { PopupProps, Placement } from '../popup/types';

export type PopupPlacement = Placement;

export interface PopoverProps extends Omit<PopupProps, 'title'> {
  role?: string;
  placement?: PopupPlacement;
  title?: React.ReactNode;
  children: React.ReactElement;
}
