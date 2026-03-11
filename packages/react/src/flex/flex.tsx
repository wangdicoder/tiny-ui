import React, { useContext } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { SizeType } from '../_utils/props';
import { FlexProps } from './types';

const gapSizes: Record<SizeType, number> = {
  sm: 8,
  md: 16,
  lg: 24,
};

const Flex = React.forwardRef<HTMLElement, FlexProps>(
  (props: FlexProps, ref): JSX.Element => {
    const {
      vertical = false,
      wrap,
      justify,
      align,
      gap,
      flex,
      component: Component = 'div',
      className,
      style,
      children,
      prefixCls: customisedCls,
      ...otherProps
    } = props;
    const configContext = useContext(ConfigContext);
    const prefixCls = getPrefixCls('flex', configContext.prefixCls, customisedCls);

    const cls = classNames(prefixCls, className);

    const mergedStyle: React.CSSProperties = {
      flexDirection: vertical ? 'column' : undefined,
      flexWrap: wrap,
      justifyContent: justify,
      alignItems: align,
      gap: typeof gap === 'string' && gap in gapSizes ? gapSizes[gap as SizeType] : gap,
      flex,
      ...style,
    };

    return (
      <Component {...otherProps} ref={ref} className={cls} style={mergedStyle}>
        {children}
      </Component>
    );
  }
);

Flex.displayName = 'Flex';

export default Flex;
