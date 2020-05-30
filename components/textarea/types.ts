import React from 'react';
import { BaseProps } from '../_utils/props';

export interface TextareaProps extends BaseProps {
  rows?: number;
  limit?: number;
  counter?: (count?: number) => React.ReactNode;
  defaultValue?: string;
  value?: string;
  onChange?: (value: string, event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
}
