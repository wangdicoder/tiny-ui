import React, { useContext } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { HeadingProps } from './types';

const headingGenerator = (htmlType: string, displayName: string) => {
  const Component = React.forwardRef<HTMLHeadingElement, HeadingProps>(
    (props: HeadingProps, ref): JSX.Element => {
      const { prefixCls: customisedCls, className, children, ...otherProps } = props;
      const configContext = useContext(ConfigContext);
      const prefixCls = getPrefixCls('typography', configContext.prefixCls, customisedCls);
      const cls = classNames(prefixCls, className);

      return React.createElement(
        htmlType,
        {
          ...otherProps,
          ref,
          className: cls,
        },
        children
      );
    }
  );

  Component.displayName = displayName;

  return Component;
};

const Heading = (props: HeadingProps): JSX.Element | null => {
  const { level = 1, ...otherProps } = props;
  if (level < 1 || level > 6) {
    console.warn('The heading level parameter is invalid.');
    return null;
  }
  const Component = headingGenerator(`h${level}`, `H${level}`);
  return <Component {...otherProps} />;
};

export default Heading;
