import { ReactNode } from 'react';
import { BaseProps } from '../_utils/props';

export type MessageType = 'success' | 'error' | 'warning' | 'info' | 'loading' | undefined;

export interface MessageProps extends BaseProps {
  type: MessageType;
  content: string;
  duration: number;
  icon?: ReactNode;
  extra?: ReactNode;
  willUnmount: (height: number) => void;
}
