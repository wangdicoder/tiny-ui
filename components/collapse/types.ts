import React from 'react';
import { BaseProps } from '../_utils/props';

export interface CollapsePanelProps extends BaseProps {
  itemKey: string;
  header: React.ReactNode;
  duration: number;
  isActive?: boolean;
  disabled?: boolean;
  extra?: React.ReactNode;
  deletable?: boolean;
  /** header click callback */
  onItemClick?: (itemKey: string) => void;
  showArrow?: boolean;
  children?: React.ReactNode;
}

export interface CollapseProps extends BaseProps {
  defaultActiveKey?: string | string[];
  activeKey?: string | string[];
  duration?: number;
  /** Only open one panel */
  accordion?: boolean;
  /** Allow to delete */
  deletable?: boolean;
  showArrow?: boolean;
  bordered?: boolean;
  onChange?: (keys: string | string[]) => void;
  children: React.ReactElement<CollapsePanelProps>;
}
