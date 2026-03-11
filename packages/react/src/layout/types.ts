import React from 'react';
import { BaseProps } from '../_utils/props';

export interface LayoutProps extends BaseProps, React.PropsWithRef<JSX.IntrinsicElements['div']> {}

export type SidebarTheme = 'light' | 'dark';

export interface SidebarProps extends BaseProps, React.PropsWithRef<JSX.IntrinsicElements['div']> {
  collapsible?: boolean;
  collapsed?: boolean;
  defaultCollapsed?: boolean;
  onCollapse?: (collapsed: boolean) => void;
  trigger?: React.ReactNode;
  width?: number | string;
  collapsedWidth?: number | string;
  theme?: SidebarTheme;
  children?: React.ReactNode;
}
