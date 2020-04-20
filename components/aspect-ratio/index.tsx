import React from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';

export interface AspectRatioProps
  extends BaseProps,
    React.PropsWithoutRef<JSX.IntrinsicElements['div']> {
  width?: number | string;
  ratio?: number;
  children?: React.ReactNode;
}

const AspectRatio = (props: AspectRatioProps): React.ReactElement => {
  const {
    prefixCls = 'ty-aspect-ratio',
    ratio = 1,
    width = '100%',
    className,
    style,
    children,
  } = props;
  const cls = classNames(prefixCls, className);

  return (
    <div className={cls} style={{ ...style, width }}>
      <div className={`${prefixCls}__padding`} style={{ paddingTop: `${(1 / ratio) * 100}%` }} />
      <div className={`${prefixCls}__inside`}>{children}</div>
    </div>
  );
};

export default AspectRatio;
