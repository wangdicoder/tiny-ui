import React from 'react';
import { BaseProps, DirectionType } from '../_utils/props';

export interface MenuProps
  extends BaseProps,
    Omit<React.PropsWithoutRef<JSX.IntrinsicElements['ul']>, 'onSelect'> {
  defaultIndex?: string;
  mode?: DirectionType;
  onSelect?: (selectedIndex: string) => void;
  children?: React.ReactNode;
}

export interface MenuItemProps
  extends BaseProps,
    React.PropsWithoutRef<JSX.IntrinsicElements['li']> {
  index?: string;
  disabled?: boolean;
}

export interface MenuItemGroupProps
  extends BaseProps,
    Omit<React.PropsWithoutRef<JSX.IntrinsicElements['li']>, 'title'> {
  index?: string;
  title?: string;
  children?: React.ReactNode;
}

export interface SubMenuProps
  extends BaseProps,
    Omit<React.PropsWithoutRef<JSX.IntrinsicElements['li']>, 'title'> {
  title: React.ReactNode;
  index?: string;
  children?: React.ReactNode;
}
