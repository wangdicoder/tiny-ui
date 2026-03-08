import React from 'react';
import { BaseProps } from '../_utils/props';

export type CalendarMode = 'month' | 'year';

export interface CalendarProps
  extends BaseProps,
    Omit<React.PropsWithoutRef<JSX.IntrinsicElements['div']>, 'onChange' | 'onSelect' | 'defaultValue'> {
  defaultValue?: Date;
  value?: Date;
  mode?: CalendarMode;
  defaultMode?: CalendarMode;
  fullscreen?: boolean;
  disabledDate?: (currentDate: Date) => boolean;
  onChange?: (date: Date) => void;
  onSelect?: (date: Date) => void;
  onPanelChange?: (date: Date, mode: CalendarMode) => void;
  dateCellRender?: (date: Date) => React.ReactNode;
  monthCellRender?: (date: Date) => React.ReactNode;
  headerRender?: (config: { value: Date; mode: CalendarMode; onChange: (date: Date) => void; onModeChange: (mode: CalendarMode) => void }) => React.ReactNode;
}
