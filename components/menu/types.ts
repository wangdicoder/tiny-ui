import React from 'react';
import { BaseProps, DirectionType } from '../_utils/props';

export type MenuMode = DirectionType | 'inline';
export type Theme = 'light' | 'dark';

export interface MenuProps
  extends BaseProps,
    Omit<React.PropsWithoutRef<JSX.IntrinsicElements['ul']>, 'onSelect'> {
  defaultIndex?: string;

  /** color theme of the menu */
  theme?: Theme;

  /** type of menu: vertical, horizontal or inline */
  mode?: MenuMode;

  /** indent (in pixels) of inline menu items on each level */
  inlineIndent?: number;

  /** called when a menu item is selected */
  onSelect?: (selectedIndex: string) => void;
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
