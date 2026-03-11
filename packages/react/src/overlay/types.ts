import React from 'react';
import { BaseProps } from '../_utils/props';

export type OverlayMaskType = 'default' | 'inverted' | 'none';

export interface OverlayProps extends BaseProps {
  isShow?: boolean;
  blurred?: boolean;
  unmountOnExit?: boolean;
  clickCallback?: (e: React.MouseEvent) => void;
  zIndex?: number;
  onEnter?: () => void;
  onExit?: () => void;
  onEntered?: () => void;
  onExited?: () => void;
  type?: OverlayMaskType;
  children?: React.ReactNode;
}
