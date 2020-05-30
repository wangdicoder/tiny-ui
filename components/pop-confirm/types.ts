import React from 'react';
import { PopoverProps } from '../popover/types';

export interface PopConfirmProps extends PopoverProps {
  confirmText?: string;
  cancelText?: string;
  onConfirm?: (e: React.MouseEvent) => void;
  onCancel?: (e: React.MouseEvent) => void;
  icon?: React.ReactNode;
}
