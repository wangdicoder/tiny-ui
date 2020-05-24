import React, { useContext, ReactNode } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { BaseProps } from '../_utils/props';
import { StepsStatus } from './steps';
import { StepsContext } from './steps-context';
import { Check, Close } from '../_utils/components';

export interface StepsItemProps
  extends BaseProps,
    Omit<React.PropsWithRef<JSX.IntrinsicElements['div']>, 'title'> {
  stepIndex?: number;
  icon?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  status?: StepsStatus;
  disabled?: boolean;
}

const StepsItem = React.forwardRef<HTMLDivElement, StepsItemProps>(
  (props: StepsItemProps, ref): React.ReactElement => {
    const {
      stepIndex = 0,
      disabled = false,
      status,
      title,
      description,
      icon,
      onClick,
      className,
      prefixCls: customisedCls,
      ...otherProps
    } = props;
    const configContext = useContext(ConfigContext);
    const prefixCls = getPrefixCls('steps-item', configContext.prefixCls, customisedCls);
    const stepsContext = useContext(StepsContext);
    const getStatus = () => {
      const { current } = stepsContext;
      if (status === 'error') {
        return 'error';
      } else if (current > stepIndex) {
        return 'finish';
      } else if (current === stepIndex) {
        return stepsContext.status;
      } else {
        return 'wait';
      }
    };
    const stepStatus = 'status' in props ? props.status : getStatus();
    const cls = classNames(
      prefixCls,
      className,
      `${prefixCls}_${stepStatus}`,
      `${prefixCls}_label-${stepsContext.labelPlacement}`,
      {
        [`${prefixCls}_disabled`]: disabled,
      }
    );

    const stepItemOnClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!disabled && stepsContext.clickable) {
        onClick && onClick(e);
        stepsContext.onClick && stepsContext.onClick(stepIndex);
      }
    };

    const renderIcon = (): React.ReactNode => {
      if (icon) {
        return icon;
      }

      let iconNode: ReactNode = stepIndex + 1;
      if (stepStatus === 'finish') {
        iconNode = <Check />;
      } else if (stepStatus === 'error') {
        iconNode = <Close />;
      }

      return iconNode;
    };

    return (
      <div
        {...otherProps}
        role={stepsContext.clickable ? 'button' : undefined}
        ref={ref}
        className={cls}
        onClick={stepItemOnClick}>
        <div className={`${prefixCls}__head`}>
          <div className={`${prefixCls}__icon`}>{renderIcon()}</div>
          <div className={`${prefixCls}__tail`} />
        </div>
        <div className={`${prefixCls}__content`}>
          <div className={`${prefixCls}__title`}>{title}</div>
          <div className={`${prefixCls}__desc`}>{description}</div>
        </div>
      </div>
    );
  }
);

StepsItem.displayName = 'StepsItem';

export default StepsItem;
