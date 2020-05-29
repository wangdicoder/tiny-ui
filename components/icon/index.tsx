import React, { useContext } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { IconProps } from './types';

const Icon = (props: IconProps): JSX.Element => {
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
