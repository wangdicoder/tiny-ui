import React, { useContext } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { LinkProps } from './types';

const Link = (props: LinkProps): React.ReactElement => {
  const {
    disabled = false,
    external = true,
    underline = true,
    className,
    style,
    children,
    target,
    prefixCls: customisedCls,
    ...otherProps
  } = props;
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('link', configContext.prefixCls, customisedCls);
  const cls = classNames(prefixCls, className, {
    [`${prefixCls}_disabled`]: disabled,
    [`${prefixCls}_no-underline`]: !underline,
  });

  if (disabled) {
    delete otherProps.href;
  }
  return (
    <a
      {...otherProps}
      target={target ? target : external ? '_blank' : '_self'}
      className={cls}
      style={style}
      role="link"
      aria-disabled={disabled}>
      <span>{children}</span>
    </a>
  );
};

Link.displayName = 'Link';

export default Link;
