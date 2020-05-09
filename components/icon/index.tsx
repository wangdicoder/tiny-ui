import React, { useContext } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';

export interface IconTypes extends React.PropsWithoutRef<JSX.IntrinsicElements['i']> {
  name: string;
  color?: string;
  size?: string | number;
  style?: React.CSSProperties;
  spin?: boolean;
  className?: string;
  prefixCls?: string;
}

const Icon = (props: IconTypes): JSX.Element => {
  const {
    name,
    color,
    size,
    style,
    spin,
    className,
    prefixCls: customisedCls,
    ...otherProps
  } = props;
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('icon', configContext.prefixCls, customisedCls);
  const cls = classNames(prefixCls, className, `ty--${name}`, {
    [`${prefixCls}_spin`]: spin,
  });
  return <i className={cls} style={{ color, fontSize: size, ...style }} {...otherProps} />;
};

Icon.displayName = 'Icon';

export default Icon;
