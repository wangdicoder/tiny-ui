import React from 'react';
import { BaseProps } from '../_utils/props';

export type DateType = {
  day: number;
  hour: number;
  min: number;
  sec: number;
  millisec: number;
};

export interface CountdownProps extends BaseProps {
  value: Date;
  onFinish?: () => void;
  millisec?: boolean;
  children?: (date: DateType) => React.ReactNode;
}
