import React, { useContext } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { HeadingProps } from './types';

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  (props, ref) => {
    const { level = 1, prefixCls: customisedCls, className, children, ...otherProps } = props;
    const configContext = useContext(ConfigContext);
    const prefixCls = getPrefixCls('typography', configContext.prefixCls, customisedCls);

    if (level < 1 || level > 6) {
      console.warn('The heading level parameter is invalid.');
      return null;
    }
    const cls = classNames(prefixCls, className);

    return React.createElement(
      `h${level}`,
      {
        ...otherProps,
        ref,
        className: cls,
      },
      children
    );
  }
);

Heading.displayName = 'Heading';

export default Heading;
