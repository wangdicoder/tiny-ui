import React, { useContext } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import {
  CheckCircle,
  CloseCircle,
  InfoCircle,
  LoadingCircle,
  WarningCircle,
} from '../_utils/components';
import { ResultProps } from './types';

const Result = React.forwardRef<HTMLDivElement, ResultProps>((props: ResultProps, ref) => {
  const {
    status = 'info',
    prefixCls: customisedCls,
    title,
    subtitle,
    icon,
    extra,
    className,
    children,
    ...otherProps
  } = props;
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('result', configContext.prefixCls, customisedCls);
  const cls = classNames(prefixCls, className, `${prefixCls}_${status}`);

  const renderIcon = (): React.ReactNode => {
    if (React.isValidElement(icon)) {
      return icon;
    } else {
      const iconSize = 80;
      switch (status) {
        case 'success':
          return <CheckCircle size={iconSize} />;
        case 'info':
          return <InfoCircle size={iconSize} />;
        case 'warning':
          return <WarningCircle size={iconSize} />;
        case 'error':
          return <CloseCircle size={iconSize} />;
        case 'loading':
          return <LoadingCircle size={iconSize} className={`${prefixCls}__icon`} />;
      }
    }

    return null;
  };

  return (
    <div {...otherProps} ref={ref} className={cls}>
      <div className={`${prefixCls}__icon-container`}>{renderIcon()}</div>
      {title && <div className={`${prefixCls}__title`}>{title}</div>}
      {subtitle && <div className={`${prefixCls}__subtitle`}>{subtitle}</div>}
      {extra && <div className={`${prefixCls}__extra`}>{extra}</div>}
      {children && <div className={`${prefixCls}__content`}>{children}</div>}
    </div>
  );
});

Result.displayName = 'Result';

export default Result;
