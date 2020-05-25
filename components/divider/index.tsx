import React, { useContext } from 'react';
import classNames from 'classnames';
import { BaseProps, DirectionType } from '../_utils/props';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';

export type DivideAlign = 'left' | 'right' | 'center';

export interface DividerProps
  extends BaseProps,
    React.PropsWithoutRef<JSX.IntrinsicElements['div']> {
  type?: DirectionType;
  dashed?: boolean;
  align?: DivideAlign;
  children?: React.ReactNode;
}

const Divider = (props: DividerProps): JSX.Element => {
  const {
    type = 'horizontal',
    dashed = false,
    align = 'center',
    prefixCls: customisedCls,
    className,
    children,
    ...otherProps
  } = props;
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('divider', configContext.prefixCls, customisedCls);
  const cls = classNames(prefixCls, className, `${prefixCls}_${type}`, `${prefixCls}_${align}`, {
    [`${prefixCls}_${type}-dashed`]: dashed,
    [`${prefixCls}_text`]: children,
  });

  return (
    <div {...otherProps} className={cls}>
      {children && <span className={`${prefixCls}_inner-text`}>{children}</span>}
    </div>
  );
};

Divider.displayName = 'Divider';

export default Divider;
