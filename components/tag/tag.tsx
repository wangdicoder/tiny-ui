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

const Tag = (props: TagProps) => {
  const {
    prefixCls = 'ty-tag',
    closable = false,
    defaultVisible = true,
    color,
    onClose,
    onClick,
    className,
    style,
    children,
  } = props;
  const [visible, setVisible] = useState('visible' in props ? props.visible : defaultVisible);
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
    !('visible' in props) && setVisible(false);
  };

  const tagStyle: React.CSSProperties = {
    backgroundColor: color ? (PresetColors.includes(color) ? undefined : color) : undefined,
    borderColor: color ? (PresetColors.includes(color) ? undefined : color) : undefined,
    color: color ? (PresetColors.includes(color) ? undefined : '#fff') : undefined,
    ...style,
  };

  useEffect(() => {
    'visible' in props && setVisible(props.visible);
  }, [props.visible]);

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

Tag.displayName = 'Tag';

export default Tag;
