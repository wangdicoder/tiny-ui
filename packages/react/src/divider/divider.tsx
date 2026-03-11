import React, { useContext } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { DividerProps } from './types';

const Divider = React.memo(React.forwardRef<HTMLDivElement, DividerProps>((props, ref) => {
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
    <div {...otherProps} ref={ref} role="separator" className={cls}>
      {children && <span className={`${prefixCls}_inner-text`}>{children}</span>}
    </div>
  );
}));

Divider.displayName = 'Divider';

export default Divider;
