import React from 'react';
import { BaseProps } from '../_utils/props';
import { OverlayMaskType } from '../overlay/types';

export type DrawerPlacement = 'top' | 'bottom' | 'left' | 'right';

export interface DrawerProps extends BaseProps {
  onClose?: (e: React.MouseEvent) => void;
  placement?: DrawerPlacement;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  zIndex?: number;
  size?: number | string;
  closable?: boolean;
  maskType?: OverlayMaskType;
  maskClosable?: boolean;
  unmountOnClose?: boolean;
  afterClose?: () => void;
  visible?: boolean;
  keyboard?: boolean;
  maskStyle?: React.CSSProperties;
  children?: React.ReactNode;
}
