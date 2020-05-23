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
      status,
      title,
      description,
      icon,
      className,
      prefixCls: customisedCls,
      ...otherProps
    } = props;
    const configContext = useContext(ConfigContext);
    const prefixCls = getPrefixCls('steps-item', configContext.prefixCls, customisedCls);
    const { current, labelPlacement } = useContext(StepsContext);
    const getStatus = () => {
      if (status === 'error') {
        return 'error';
      } else if (current > stepIndex) {
        return 'finish';
      } else if (current === stepIndex) {
        return 'process';
      } else {
        return 'wait';
      }
    };
    const stepStatus = 'status' in props ? props.status : getStatus();
    console.log(stepStatus);
    const cls = classNames(
      prefixCls,
      className,
      `${prefixCls}_${stepStatus}`,
      `${prefixCls}_label-${labelPlacement}`,
      {
        [`${prefixCls}_active`]: stepIndex === current,
      }
    );

    const renderIcon = (): React.ReactNode => {
      if (icon) {
        return icon;
      }

      let iconNode: ReactNode = stepIndex + 1;
      if (current > stepIndex || status === 'finish') {
        iconNode = <Check />;
      }
      if (status === 'error') {
        iconNode = <Close />;
      }

      return iconNode;
    };

    return (
      <div {...otherProps} ref={ref} className={cls}>
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
