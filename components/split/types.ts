import React from 'react';
import { BaseProps, DirectionType } from '../_utils/props';

export interface SplitProps
  extends BaseProps,
    Omit<React.PropsWithoutRef<JSX.IntrinsicElements['div']>, 'onChange'> {
  /** Split mode */
  mode?: DirectionType;

  /** Disabled flag */
  disabled?: boolean;

  /** Minimum width / height of the target pane */
  min?: number | string;

  /** Maximum width / height of the target pane */
  max?: number | string;

  /** Control the size of target pane */
  size?: number | string;

  /** Default size of target pane */
  defaultSize?: number | string;

  /** Resizer's other props */
  resizerProps?: Record<string, unknown>;

  /** Drag step */
  step?: number;

  resizerSize?: number;

  onChange?: (size: number) => void;
  onDragStarted?: () => void;
  onDragFinished?: () => void;
}
