import React from 'react';
import { BaseProps } from '../_utils/props';

export type TreeData = {
  key?: string;
  title?: React.ReactNode;
  disableCheckbox?: boolean;
  disabled?: boolean;
  icon?: (isExpanded: boolean) => React.ReactNode;
  children?: TreeData[];
};

export interface TreeProps
  extends BaseProps,
    Omit<React.PropsWithRef<JSX.IntrinsicElements['ul']>, 'onSelect'> {
  data?: TreeData[];
  indent?: number;
  checkable?: boolean;
  blockNode?: boolean;
  disabled?: boolean;
  defaultCheckedKeys?: string[];
  defaultExpandedKeys?: string[];
  defaultExpandAll?: boolean;
  onCheck?: (checkedKeys: string[]) => void;
}
