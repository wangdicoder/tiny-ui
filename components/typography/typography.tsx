import React, { useContext } from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';

export interface TypographyProps
  extends BaseProps,
    React.PropsWithRef<JSX.IntrinsicElements['div']> {
  children?: React.ReactNode;
}

const Typography = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  (props: TypographyProps, ref): JSX.Element => {
    const { className, children, prefixCls: customisedCls, ...otherProps } = props;
    const configContext = useContext(ConfigContext);
    const prefixCls = getPrefixCls('typography', configContext.prefixCls, customisedCls);
    const cls = classNames(className, prefixCls);
    return (
      <div ref={ref} className={cls} {...otherProps}>
        {children}
      </div>
    );
  }
);

Typography.displayName = 'Typography';

export default Typography;
