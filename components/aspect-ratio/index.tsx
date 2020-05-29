import React, { useContext } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { AspectRatioProps } from './types';

const AspectRatio = (props: AspectRatioProps): React.ReactElement => {
  const {
    ratio = 1,
    width = '100%',
    prefixCls: customisedCls,
    className,
    style,
    children,
    ...otherProps
  } = props;
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('aspect-ratio', configContext.prefixCls, customisedCls);
  const cls = classNames(prefixCls, className);

  return (
    <div {...otherProps} className={cls} style={{ ...style, width }}>
      <div className={`${prefixCls}__padding`} style={{ paddingTop: `${(1 / ratio) * 100}%` }} />
      <div className={`${prefixCls}__inside`}>{children}</div>
    </div>
  );
};

export default AspectRatio;
