import { ReactNode } from 'react';
import { BaseProps, SizeType } from '../_utils/props';

export interface DisabledTime {
  disabledHours?: () => number[];
  disabledMinutes?: (hour: number) => number[];
  disabledSeconds?: (hour: number, minute: number) => number[];
}

export interface TimePickerProps extends BaseProps {
  /** Default time value */
  defaultValue?: Date;
  /** Controlled time value */
  value?: Date;
  /** Whether the popup is open (controlled) */
  open?: boolean;
  /** Display format string */
  format?: string;
  /** Enable 12-hour format */
  use12Hours?: boolean;
  /** Hour step interval */
  hourStep?: number;
  /** Minute step interval */
  minuteStep?: number;
  /** Second step interval */
  secondStep?: number;
  /** Disable time picker */
  disabled?: boolean;
  /** Input placeholder */
  placeholder?: string;
  /** Show clear button */
  allowClear?: boolean;
  /** Input size */
  size?: SizeType;
  /** Prevent keyboard input */
  inputReadOnly?: boolean;
  /** Function to specify unavailable times */
  disabledTime?: () => DisabledTime;
  /** Hide disabled options in the panel */
  hideDisabledOptions?: boolean;
  /** Show "Now" button in footer (default: true) */
  showNow?: boolean;
  /** Extra content in the footer */
  renderExtraFooter?: () => ReactNode;
  /** Suffix icon */
  suffixIcon?: ReactNode;
  /** Callback when time changes */
  onChange?: (date: Date | null) => void;
  /** Callback when popup opens/closes */
  onOpenChange?: (open: boolean) => void;
  /** Enable infinite circular scrolling for h/m/s columns */
  loop?: boolean;
}
