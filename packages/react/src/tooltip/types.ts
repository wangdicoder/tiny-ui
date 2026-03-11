import React from 'react';
import { PopupProps, Placement } from '../popup/types';

export type TooltipPlacement = Placement;

export interface TooltipProps extends Omit<PopupProps, 'title' | 'content'> {
  title?: React.ReactNode;
  placement?: TooltipPlacement;
}
