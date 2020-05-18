import React, { useContext } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { BaseProps } from '../_utils/props';

export interface SkeletonProps extends BaseProps, React.PropsWithRef<JSX.IntrinsicElements['div']> {
  active?: boolean;
  rounded?: boolean;
  children?: React.ReactNode;
}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  (props: SkeletonProps, ref): JSX.Element => {
    const {
      active = false,
      rounded = false,
      className,
      children,
      prefixCls: customisedCls,
      ...otherProps
    } = props;
    const configContext = useContext(ConfigContext);
    const prefixCls = getPrefixCls('skeleton', configContext.prefixCls, customisedCls);
    const cls = classNames(prefixCls, className, {
      [`${prefixCls}_active`]: configContext.shimmer || active,
      [`${prefixCls}_rounded`]: rounded,
    });

    return (
      <div ref={ref} {...otherProps} className={cls}>
        {children}
      </div>
    );
  }
);

Skeleton.displayName = 'Skeleton';

export default Skeleton;
