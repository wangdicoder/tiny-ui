import React from 'react';
import { BaseProps } from '../_utils/props';

export interface AnchorProps extends BaseProps {
  affix?: boolean;
  offsetBottom?: number;
  offsetTop?: number;
  children?: React.ReactNode;
}

export interface AnchorLinkProps extends BaseProps, React.PropsWithRef<JSX.IntrinsicElements['a']> {
  title: string;
  children?: React.ReactElement<AnchorLinkProps>[];
}
