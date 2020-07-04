import React, { useContext } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { AnchorLinkProps } from './types';

const AnchorLink = React.forwardRef<HTMLAnchorElement, AnchorLinkProps>(
  (props: AnchorLinkProps, ref): JSX.Element => {
    const { title, className, children, prefixCls: customisedCls, ...otherProps } = props;
    const configContext = useContext(ConfigContext);
    const prefixCls = getPrefixCls('anchor', configContext.prefixCls, customisedCls);
    const cls = classNames(prefixCls, className);

    return (
      <a {...otherProps} ref={ref} className={cls}>
        {children ? children : title}
      </a>
    );
  }
);

AnchorLink.displayName = 'AnchorLink';

export default AnchorLink;
