import React, { useContext } from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';
import { SplitMode } from './shared-props';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';

export interface SplitBarProps extends BaseProps {
  mode: SplitMode;
  children?: React.ReactNode;
}

const SplitBar = (props: SplitBarProps): JSX.Element => {
  const { prefixCls: customisedCls, mode, className, style } = props;
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('split-bar', configContext.prefixCls, customisedCls);
  const cls = classNames(prefixCls, className, {
    [`${prefixCls}_${mode}`]: mode,
  });

  const onMouseMove = (e: React.MouseEvent) => {
    console.log(e);
  };

  return (
    <div className={cls} style={style} onMouseMove={onMouseMove}>
      <div className={`${prefixCls}__icon`} />
    </div>
  );
};

export default SplitBar;
