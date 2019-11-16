import React, { useState, useEffect, MouseEvent } from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';

export const PresetColors = [
  'magenta',
  'red',
  'volcano',
  'orange',
  'gold',
  'lime',
  'green',
  'cyan',
  'blue',
  'geekblue',
  'purple',
];

export interface TagProps extends BaseProps {
  color?: string;
  closable?: boolean;
  onClose?: (e: MouseEvent) => void;
  onClick?: (e: MouseEvent) => void;
  defaultVisible?: boolean;
  visible?: boolean;
  children?: React.ReactNode;
}

const Tag: React.FC<TagProps> & { CheckableTag?: any } = ({
  prefixCls = 'ty-tag',
  closable = false,
  defaultVisible = true,
  ...restProps
}: TagProps) => {
  const { color, onClose, onClick, className, style, children } = restProps;
  const [visible, setVisible] = useState(
    'visible' in restProps ? restProps.visible : defaultVisible
  );
  const cls = classNames(prefixCls, className, {
    [`${prefixCls}_${color}`]: color && PresetColors.includes(color),
    [`${prefixCls}_visible`]: visible,
    [`${prefixCls}_closeable`]: closable,
  });

  /**
   * Callback when the close button is clicked.
   * @param e
   */
  const closeBtnOnClick = (e: MouseEvent<HTMLSpanElement>) => {
    onClose && onClose(e);
    if (e.defaultPrevented) {
      return;
    }
    !('visible' in restProps) && setVisible(false);
  };

  const tagStyle: React.CSSProperties = {
    backgroundColor: color ? (PresetColors.includes(color) ? undefined : color) : undefined,
    borderColor: color ? (PresetColors.includes(color) ? undefined : color) : undefined,
    color: color ? (PresetColors.includes(color) ? undefined : '#fff') : undefined,
    ...style,
  };

  useEffect(() => {
    'visible' in restProps && setVisible(restProps.visible);
  });

  return (
    <div className={cls} style={tagStyle} onClick={onClick}>
      {children}
      {closable && (
        <span className={`${prefixCls}__close-btn`} onClick={closeBtnOnClick}>
          ✕
        </span>
      )}
    </div>
  );
};

export default Tag;
