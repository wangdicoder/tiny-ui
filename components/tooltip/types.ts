import React from 'react';
import { PopupProps, Placement } from '../popup/types';

export { Placement };

export interface TooltipProps extends Omit<PopupProps, 'title' | 'content'> {
  title?: React.ReactNode;
}
