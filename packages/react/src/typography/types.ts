import React from 'react';
import { BaseProps } from '../_utils/props';

export interface TypographyProps
  extends BaseProps,
    React.PropsWithRef<JSX.IntrinsicElements['div']> {
  children?: React.ReactNode;
}

export interface ParagraphProps extends BaseProps, React.PropsWithRef<JSX.IntrinsicElements['p']> {
  children?: React.ReactNode;
}

export interface HeadingProps
  extends BaseProps,
    React.PropsWithRef<React.HTMLAttributes<HTMLHeadingElement>> {
  level?: number;
  children?: React.ReactNode;
}

export interface TextProps extends BaseProps, React.PropsWithRef<JSX.IntrinsicElements['span']> {
  code?: boolean;
  del?: boolean;
  underline?: boolean;
  strong?: boolean;
  italic?: boolean;
  mark?: boolean;
  sub?: boolean;
  sup?: boolean;
  children: React.ReactNode;
}
