import React, { MouseEvent, useState, useEffect, useContext } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { CheckableTagProps } from './types';
import Tag from './index';

const CheckableTag = (props: CheckableTagProps): JSX.Element => {
  const {
    defaultChecked = true,
    prefixCls: customisedCls,
    onChange,
    className,
    style,
    children,
  } = props;
  const [checked, setChecked] = useState<boolean>(
    'checked' in props ? (props.checked as boolean) : defaultChecked
  );
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('checkable-tag', configContext.prefixCls, customisedCls);
  const cls = classNames(prefixCls, className, {
    [`${prefixCls}_checked`]: checked,
  });

  /**
   * Callback when the tag itself is clicked.
   */
  const itemOnClick = (e: MouseEvent): void => {
    const state = !checked;
    !('checked' in props) && setChecked(state);
    onChange && onChange(state, e);
  };

  useEffect(() => {
    'checked' in props && setChecked(props.checked as boolean);
  }, [props]);

  return (
    <Tag className={cls} style={style} onClick={itemOnClick}>
      {children}
    </Tag>
  );
};

CheckableTag.displayName = 'CheckableTag';

export default CheckableTag;
