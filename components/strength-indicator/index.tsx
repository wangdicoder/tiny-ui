import React, { useContext } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { StrengthIndicatorProps } from './types';

const StrengthIndicator = React.forwardRef<HTMLDivElement, StrengthIndicatorProps>(
  (props: StrengthIndicatorProps, ref): React.ReactElement => {
    const {
      current = 0,
      blocks = 3,
      colors = ['#f44336', '#ff9800', '#52c41a'],
      className,
      prefixCls: customisedCls,
      ...otherProps
    } = props;
    const configContext = useContext(ConfigContext);
    const prefixCls = getPrefixCls('strength-indicator', configContext.prefixCls, customisedCls);
    const cls = classNames(prefixCls, className);
    const displayLabels: React.ReactNode[] = Array.isArray(props.labels)
      ? props.labels
      : ['Weak', 'Medium', 'Strong'];

    return (
      <div {...otherProps} className={cls} ref={ref}>
        {Array.from(new Array(blocks)).map((item, idx) => {
          const itemCls = classNames(`${prefixCls}__item`, {
            [`${prefixCls}__item_active`]: idx < current,
          });
          const bgColor = idx < current ? colors[current - 1] : undefined;
          return (
            <div key={idx} className={itemCls}>
              <div className={`${prefixCls}__inner`} style={{ backgroundColor: bgColor }} />
              {'labels' in props && (
                <div className={`${prefixCls}__label`}>{displayLabels[idx]}</div>
              )}
            </div>
          );
        })}
      </div>
    );
  }
);

StrengthIndicator.displayName = 'StrengthIndicator';

export default StrengthIndicator;
