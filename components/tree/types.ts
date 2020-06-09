import React from 'react';
import { BaseProps } from '../_utils/props';

export type TreeData = {
  key: string;
  title?: string;
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
  selectable?: boolean;
  checkable?: boolean;
  blockNode?: boolean;
  disabled?: boolean;
  defaultCheckedKeys?: string[];
  defaultSelectedKeys?: string[];
  defaultExpandedKeys?: string[];
  defaultExpandAll?: boolean;
  onCheck?: (checkedKeys: string[]) => void;
  onSelect?: (selectedKeys: string[]) => void;
}
