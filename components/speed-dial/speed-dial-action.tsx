import React, { useContext } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { SpeedDialActionProps } from './types';
import { SpeedDialContext } from './speed-dial-context';

const getDefaultTooltipPlacement = (direction: string): 'left' | 'right' | 'top' | 'bottom' => {
  if (direction === 'left' || direction === 'right') return 'top';
  return 'left';
};

const SpeedDialAction = React.forwardRef<HTMLButtonElement, SpeedDialActionProps>(
  (props, ref): JSX.Element => {
    const {
      icon,
      tooltip,
      tooltipPlacement,
      disabled = false,
      className,
      style,
      prefixCls: customisedCls,
      ...otherProps
    } = props;

    const configContext = useContext(ConfigContext);
    const { direction } = useContext(SpeedDialContext);
    const prefixCls = getPrefixCls('speed-dial', configContext.prefixCls, customisedCls);
    const placement = tooltipPlacement || getDefaultTooltipPlacement(direction);

    const cls = classNames(`${prefixCls}__action`, className, {
      [`${prefixCls}__action_disabled`]: disabled,
    });

    const tooltipCls = classNames(
      `${prefixCls}__action-tooltip`,
      `${prefixCls}__action-tooltip_${placement}`
    );

    return (
      <div className={`${prefixCls}__action-wrapper`}>
        <button
          {...otherProps}
          ref={ref}
          className={cls}
          style={style}
          disabled={disabled}
          type="button"
        >
          {icon}
        </button>
        {tooltip && <span className={tooltipCls}>{tooltip}</span>}
      </div>
    );
  }
);

SpeedDialAction.displayName = 'SpeedDialAction';

export default SpeedDialAction;
