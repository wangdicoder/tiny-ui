import React from 'react';
import { BaseProps, SizeType } from '../_utils/props';

export interface ListProps<T = any>
  extends BaseProps,
    Omit<React.PropsWithoutRef<JSX.IntrinsicElements['div']>, 'children'> {
  dataSource?: T[];
  renderItem?: (item: T, index: number) => React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  loading?: boolean;
  bordered?: boolean;
  split?: boolean;
  size?: SizeType;
  grid?: ListGridType;
  locale?: { emptyText?: React.ReactNode };
  pagination?: false | ListPaginationProps;
  children?: React.ReactNode;
}

export interface ListGridType {
  gutter?: number;
  column?: number;
}

export interface ListPaginationProps {
  current?: number;
  pageSize?: number;
  total?: number;
  onChange?: (page: number, pageSize: number) => void;
}

export interface ListItemProps
  extends BaseProps,
    React.PropsWithoutRef<JSX.IntrinsicElements['div']> {
  extra?: React.ReactNode;
  actions?: React.ReactNode[];
  children?: React.ReactNode;
}

export interface ListItemMetaProps extends BaseProps {
  avatar?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
}
