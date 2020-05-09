import React, { MouseEvent, useState, useEffect, useContext } from 'react';
import classNames from 'classnames';
import Tag from './index';
import { BaseProps } from '../_utils/props';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';

export interface CheckableTagProps extends BaseProps {
  defaultChecked?: boolean;
  checked?: boolean;
  onChange?: (checked: boolean, e: MouseEvent) => void;
  children?: React.ReactNode;
}

const CheckableTag = (props: CheckableTagProps) => {
  const {
    defaultChecked = true,
    prefixCls: customisedCls,
    onChange,
    className,
    style,
    children,
  } = props;
  const [checked, setChecked] = useState('checked' in props ? props.checked : defaultChecked);
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
    'checked' in props && setChecked(props.checked);
  }, [props.checked]);

  return (
    <Tag className={cls} style={style} onClick={itemOnClick}>
      {children}
    </Tag>
  );
};

CheckableTag.displayName = 'CheckableTag';

export default CheckableTag;
