import React, { ReactNode } from 'react';
import { BaseProps } from '../_utils/props';

export interface CollapsePanelProps extends BaseProps {
  itemKey: string;
  header: ReactNode;
  disabled?: boolean;
  extra?: ReactNode;
  deletable?: boolean;
  /** header click callback */
  onItemClick?: (itemKey: string) => void;
  showArrow?: boolean;
  children?: ReactNode;
}

export interface CollapseProps
  extends BaseProps,
    Omit<React.PropsWithRef<JSX.IntrinsicElements['div']>, 'onChange'> {
  defaultActiveKey?: string | string[];
  activeKey?: string | string[];
  /** Only open one panel */
  accordion?: boolean;
  /** Allow to delete */
  deletable?: boolean;
  showArrow?: boolean;
  bordered?: boolean;
  onChange?: (keys: string | string[]) => void;
}
