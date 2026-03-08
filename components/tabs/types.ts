import { CSSProperties, ReactNode } from 'react';
import { BaseProps, SizeType } from '../_utils/props';

export type TabType = 'line' | 'card' | 'editable-card';
export type TabPosition = 'top' | 'bottom' | 'left' | 'right';

export interface TabItem {
  key: string;
  label: ReactNode;
  children?: ReactNode;
  icon?: ReactNode;
  disabled?: boolean;
  closable?: boolean;
  forceRender?: boolean;
}

export interface TabsProps
  extends BaseProps,
    Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Current active tab key */
  activeKey?: string;
  /** Initial active tab key */
  defaultActiveKey?: string;
  /** Tab content configuration (recommended) */
  items?: TabItem[];
  /** Tab style variant */
  type?: TabType;
  /** Tab position */
  tabPosition?: TabPosition;
  /** Preset tab bar size */
  size?: SizeType;
  /** Whether to animate tab transitions */
  animated?: boolean;
  /** Center the tab bar */
  centered?: boolean;
  /** Destroy inactive tab panes */
  destroyInactiveTabPane?: boolean;
  /** Extra content on the tab bar */
  tabBarExtraContent?: ReactNode | { left?: ReactNode; right?: ReactNode };
  /** Gap between tabs in pixels */
  tabBarGutter?: number;
  /** Tab bar inline styles */
  tabBarStyle?: CSSProperties;
  /** Callback when the active tab changes */
  onChange?: (activeKey: string) => void;
  /** Callback when a tab is clicked */
  onTabClick?: (key: string, event: React.MouseEvent) => void;
  /** Callback when tabs are added or removed (editable-card only) */
  onEdit?: (targetKey: string | React.MouseEvent, action: 'add' | 'remove') => void;
  /** Hide the add button in editable-card mode */
  hideAdd?: boolean;
}

export interface TabPanelProps
  extends BaseProps,
    React.HTMLAttributes<HTMLDivElement> {
  /** Whether the panel is active (set internally) */
  active?: boolean;
  /** Whether the tab is disabled */
  disabled?: boolean;
  /** Whether the tab is closable (editable-card only) */
  closable?: boolean;
  /** Tab header content */
  tab?: ReactNode;
  /** Unique key for the tab */
  tabKey?: string;
  /** Force render even when inactive */
  forceRender?: boolean;
}
