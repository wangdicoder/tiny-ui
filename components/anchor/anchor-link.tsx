import React from 'react';
import { AnchorLinkProps } from './types';

const AnchorLink = React.forwardRef<HTMLAnchorElement, AnchorLinkProps>(
  (props: AnchorLinkProps, ref): JSX.Element => {
    const { title, children, prefixCls, ...otherProps } = props;

    return (
      <li title={title} className={`${prefixCls}__link`}>
        {children ? (
          React.Children.map(children, (child) => {
            return <AnchorLink title={child.props.title} prefixCls={prefixCls} />;
          })
        ) : (
          <a {...otherProps} ref={ref}>
            {title}
          </a>
        )}
      </li>
    );
  }
);

AnchorLink.displayName = 'AnchorLink';

export default AnchorLink;
