import React, { useContext } from 'react';
import classNames from 'classnames';
import { AnchorLinkProps } from './types';
import { AnchorContext } from './anchor-context';

const AnchorLink = React.forwardRef<HTMLAnchorElement, AnchorLinkProps>(
  (props: AnchorLinkProps, ref): JSX.Element => {
    const { href, title, children, prefixCls, ...otherProps } = props;
    const anchorContext = useContext(AnchorContext);
    const cls = classNames(`${prefixCls}__link`, {
      [`${prefixCls}__link_active`]: `#${anchorContext.activeId}` === href,
    });

    const onLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const { onClick } = anchorContext;
      onClick && onClick(e, href.replace('#', ''));
    };

    return (
      <li title={title} className={cls}>
        <a
          {...otherProps}
          className={`${prefixCls}__link-title`}
          ref={ref}
          href={href}
          onClick={onLinkClick}
          target={'target' in props ? props.target : undefined}>
          {title}
        </a>
        {children && (
          <ul className={prefixCls}>
            {React.Children.map(children, (child) => (
              <AnchorLink {...child.props} prefixCls={prefixCls} />
            ))}
          </ul>
        )}
      </li>
    );
  }
);

AnchorLink.displayName = 'AnchorLink';

export default AnchorLink;
