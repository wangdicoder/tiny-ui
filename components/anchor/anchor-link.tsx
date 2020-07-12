import React, { useContext } from 'react';
import { AnchorLinkProps } from './types';
import { AnchorContext } from './anchor-context';

const AnchorLink = React.forwardRef<HTMLAnchorElement, AnchorLinkProps>(
  (props: AnchorLinkProps, ref): JSX.Element => {
    const { title, children, prefixCls, ...otherProps } = props;
    const anchorContext = useContext(AnchorContext);

    const onLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      const { onClick } = anchorContext;
      onClick && onClick(e, title);
    };

    return (
      <li title={title} className={`${prefixCls}__link`}>
        <a {...otherProps} ref={ref} onClick={onLinkClick} target={undefined}>
          {title}
        </a>
        {children && (
          <ul className={prefixCls}>
            {React.Children.map(children, (child) => {
              return <AnchorLink title={child.props.title} prefixCls={prefixCls} />;
            })}
          </ul>
        )}
      </li>
    );
  }
);

AnchorLink.displayName = 'AnchorLink';

export default AnchorLink;
