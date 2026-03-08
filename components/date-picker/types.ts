import { ReactNode } from 'react';
import { BaseProps, SizeType } from '../_utils/props';

export type PickerType = 'date' | 'month' | 'year';
export type PanelMode = 'date' | 'month' | 'year';

export interface DatePickerProps extends BaseProps {
  /** Default date value */
  defaultValue?: Date;
  /** Controlled date value */
  value?: Date;
  /** Control popup visibility */
  open?: boolean;
  /** Selection granularity */
  picker?: PickerType;
  /** Display format string */
  format?: string;
  /** Disable picker */
  disabled?: boolean;
  /** Input placeholder */
  placeholder?: string;
  /** Show clear button */
  allowClear?: boolean;
  /** Input size */
  size?: SizeType;
  /** Show "Today" button */
  showToday?: boolean;
  /** Prevent keyboard input */
  inputReadOnly?: boolean;
  /** Function to disable specific dates */
  disabledDate?: (current: Date) => boolean;
  /** Extra content in the footer */
  renderExtraFooter?: (mode: PanelMode) => ReactNode;
  /** Custom suffix icon */
  suffixIcon?: ReactNode;
  /** Callback when date changes */
  onChange?: (date: Date | null, dateString: string) => void;
  /** Callback when popup opens/closes */
  onOpenChange?: (open: boolean) => void;
  /** Callback when panel mode changes */
  onPanelChange?: (date: Date, mode: PanelMode) => void;
}
