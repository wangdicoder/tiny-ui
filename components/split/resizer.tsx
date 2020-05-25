import React, { useContext, MouseEventHandler } from 'react';
import classNames from 'classnames';
import { BaseProps, DirectionType } from '../_utils/props';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';

export interface ResizerProps
  extends BaseProps,
    React.PropsWithoutRef<JSX.IntrinsicElements['div']> {
  size: number;
  mode: DirectionType;
  onMouseDown: MouseEventHandler<HTMLDivElement>;
}

const Resizer = (props: ResizerProps): JSX.Element => {
  const { size, onMouseDown, prefixCls: customisedCls, mode, className, ...otherProps } = props;
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('split-bar', configContext.prefixCls, customisedCls);
  const cls = classNames(prefixCls, className, {
    [`${prefixCls}_${mode}`]: mode,
  });

  const style: React.CSSProperties = mode === 'vertical' ? { width: size } : { height: size };
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
