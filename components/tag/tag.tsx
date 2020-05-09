import React, { useState, useEffect, MouseEvent, useContext } from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';

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

export interface TagProps extends BaseProps, React.PropsWithoutRef<JSX.IntrinsicElements['div']> {
  color?: string;
  closable?: boolean;
  onClose?: React.MouseEventHandler;
  onClick?: React.MouseEventHandler;
  defaultVisible?: boolean;
  visible?: boolean;
  children?: React.ReactNode;
}

const Tag = (props: TagProps): React.ReactElement => {
  const {
    closable = false,
    defaultVisible = true,
    prefixCls: customisedCls,
    color,
    onClose,
    onClick,
    className,
    style,
    children,
    ...otherProps
  } = props;
  const [visible, setVisible] = useState('visible' in props ? props.visible : defaultVisible);
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('tag', configContext.prefixCls, customisedCls);
  const cls = classNames(prefixCls, className, {
    [`${prefixCls}_${color}`]: color && PresetColors.includes(color),
    [`${prefixCls}_visible`]: visible,
    [`${prefixCls}_closeable`]: closable,
  });

  /**
   * Callback when the close button is clicked.
   * @param e
   */
  const closeBtnOnClick = (e: MouseEvent<HTMLSpanElement>): void => {
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
    <div {...otherProps} className={cls} style={tagStyle} onClick={onClick}>
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
