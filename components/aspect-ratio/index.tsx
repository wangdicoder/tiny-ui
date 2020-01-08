import React from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';

export interface AspectRatioProps extends BaseProps {
  width: number | string;
  ratio?: number;
  children?: React.ReactNode;
}

const AspectRatio = (props: AspectRatioProps): React.ReactElement => {
  const { prefixCls = 'ty-aspect-ratio', ratio = 1, width, className, style, children } = props;
  const cls = classNames(prefixCls, className);

  return (
    <div className={cls} style={{ ...style, width, paddingTop: `${ratio * 100}%` }}>
      {children}
    </div>
  );
};

export default AspectRatio;
