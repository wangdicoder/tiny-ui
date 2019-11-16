import React, { MouseEvent, useState, useEffect } from 'react';
import classNames from 'classnames';
import Tag from './index';
import { BaseProps } from '../_utils/props';

export interface CheckableTagProps extends BaseProps {
  defaultChecked?: boolean;
  checked?: boolean;
  onChange?: (checked: boolean, e: MouseEvent) => void;
  children?: React.ReactNode;
}

const CheckableTag = ({
  prefixCls = 'ty-checkable-tag',
  defaultChecked = true,
  ...restProps
}: CheckableTagProps) => {
  const { onChange, className, style, children } = restProps;
  const [checked, setChecked] = useState(
    'checked' in restProps ? restProps.checked : defaultChecked
  );
  const cls = classNames(prefixCls, className, {
    [`${prefixCls}_checked`]: checked,
  });

  /**
   * Callback when the tag itself is clicked.
   */
  const itemOnClick = (e: MouseEvent) => {
    const state = !checked;
    !('checked' in restProps) && setChecked(state);
    onChange && onChange(state, e);
  };

  useEffect(() => {
    'checked' in restProps && setChecked(restProps.checked);
  });

  return (
    <Tag className={cls} style={style} onClick={itemOnClick}>
      {children}
    </Tag>
  );
};

export default CheckableTag;
