import React, { CSSProperties, ReactNode } from 'react';
import { BaseProps } from '../_utils/props';

export interface CardContentProps extends React.PropsWithoutRef<JSX.IntrinsicElements['div']> {
  prefixCls?: string;
  children: string;
}

export interface CardProps
  extends BaseProps,
    Omit<React.PropsWithoutRef<JSX.IntrinsicElements['div']>, 'title'> {
  title?: ReactNode;
  extra?: ReactNode;
  hoverable?: boolean;
  active?: boolean;
  bordered?: boolean;
  actions?: ReactNode[];
  header?: ReactNode;
  footer?: ReactNode;
  headerStyle?: CSSProperties;
  bodyStyle?: CSSProperties;
  footerStyle?: CSSProperties;
  children?: ReactNode | React.ReactElement<CardContentProps>;
}
