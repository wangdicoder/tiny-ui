import React, { useContext, MouseEventHandler } from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';
import { SplitMode } from './split';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';

export interface ResizerProps
  extends BaseProps,
    React.PropsWithoutRef<JSX.IntrinsicElements['div']> {
  mode: SplitMode;
  onMouseDown: MouseEventHandler<HTMLDivElement>;
}

const Resizer = (props: ResizerProps): JSX.Element => {
  const { onMouseDown, prefixCls: customisedCls, mode, className, style, ...otherProps } = props;
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('split-bar', configContext.prefixCls, customisedCls);
  const cls = classNames(prefixCls, className, {
    [`${prefixCls}_${mode}`]: mode,
  });

  return (
    <div
      {...otherProps}
      role="presentation"
      className={cls}
      style={style}
      onMouseDown={(e): void => onMouseDown(e)}>
      <div className={`${prefixCls}__icon`} />
    </div>
  );
};

Resizer.displayName = 'Resizer';

export default Resizer;
