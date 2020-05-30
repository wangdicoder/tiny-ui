import React, { useState, useEffect, MouseEvent, useContext } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { PresetColors, TagProps } from './types';

const Tag = (props: TagProps): JSX.Element => {
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
  const [visible, setVisible] = useState<boolean>(
    'visible' in props ? (props.visible as boolean) : defaultVisible
  );
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
    'visible' in props && setVisible(props.visible as boolean);
  }, [props]);

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
