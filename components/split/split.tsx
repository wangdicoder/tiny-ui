import React from 'react';
import classNames from 'classnames';
import { SplitPaneProps } from './split-pane';
import SplitBar, { SplitBarProps } from './split-bar';
import { BaseProps } from '../_utils/props';
import { SplitMode } from './shared-props';

export interface SplitProps extends BaseProps {
  mode?: SplitMode;
  children: React.ReactElement<SplitPaneProps | SplitBarProps>[];
}

const Split: React.FC<SplitProps> & { Pane?: any } = (props: SplitProps) => {
  const { prefixCls = 'ty-split', mode = 'horizontal', className, style, children } = props;
  const cls = classNames(prefixCls, className, {
    [`${prefixCls}_${mode}`]: mode,
  });

  const childrenCount = React.Children.count(children);
  return (
    <div className={cls} style={style}>
      {React.Children.map(children, (child, idx) => {
        const childProps: SplitPaneProps = {
          style: { ...child.props.style, width: `calc(${100 / childrenCount}%)` },
        };
        return (
          <>
            {React.cloneElement(child, childProps)}
            {idx + 1 !== childrenCount && <SplitBar mode={mode} />}
          </>
        );
      })}
    </div>
  );
};

export default Split;
