import React from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';
import { SplitMode } from './shared-props';

export interface SplitBarProps extends BaseProps {
  mode: SplitMode;
  children?: React.ReactNode;
}

const SplitBar = ({ prefixCls = 'ty-split-bar', ...restProps }: SplitBarProps) => {
  const { mode, className, style } = restProps;
  const cls = classNames(prefixCls, className, {
    [`${prefixCls}_${mode}`]: mode,
  });

  const onMouseMove = (e: React.MouseEvent) => {
    console.log(e);
  };

  return <div className={cls} style={style} onMouseMove={onMouseMove}></div>;
};

export default SplitBar;
