import React from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';

export type DivideType = 'horizontal' | 'vertical';
export type DivideAlign = 'left' | 'right' | 'center';

export interface DividerProps extends BaseProps {
  type?: DivideType;
  dashed?: boolean;
  align?: DivideAlign;
  children?: React.ReactNode;
}

const Divider = (props: DividerProps) => {
  const {
    prefixCls = 'ty-divider',
    type = 'horizontal',
    dashed = false,
    align = 'center',
    className,
    style,
    children,
  } = props;
  const cls = classNames(prefixCls, className, `${prefixCls}_${type}`, `${prefixCls}_${align}`, {
    [`${prefixCls}_${type}-dashed`]: dashed,
    [`${prefixCls}_text`]: children,
  });

  return (
    <div className={cls} style={style}>
      {children && <span className={`${prefixCls}_inner-text`}>{children}</span>}
    </div>
  );
};

export default Divider;
