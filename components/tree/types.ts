import React from 'react';
import { BaseProps } from '../_utils/props';

export type TreeData = {
  id?: string | number;
  title: string;
  children?: TreeData[];
};

export interface TreeProps extends BaseProps, React.PropsWithRef<JSX.IntrinsicElements['ul']> {
  data?: TreeData[];
  indent?: number;
  selectable?: boolean;
  checkable?: boolean;
  block?: boolean;
  icon?: (isCollapsed: boolean) => React.ReactNode;
}
