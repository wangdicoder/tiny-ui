import React, { useRef, useEffect, useState } from 'react';
import classNames from 'classnames';
import Icon from '../icon';
import { BaseProps } from '../_utils/props';

export type AvatarShape = 'circle' | 'square';
export type AvatarPresence = 'online' | 'busy' | 'away' | 'offline';

export interface AvatarProps extends BaseProps {
  icon?: string;
  shape?: AvatarShape;
  size?: number;
  src?: string;
  presence?: AvatarPresence;
  alt?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  children?: React.ReactNode;
}

const Avatar: React.FC<AvatarProps> & { Group?: any } = ({
  prefixCls = 'ty-avatar',
  size = 38,
  shape = 'circle',
  icon = 'user',
  presence = undefined,
  ...restProps
}: AvatarProps) => {
  const { src, alt, onClick, children, className, style } = restProps;
  const outerEl = useRef<HTMLSpanElement | null>(null);
  const textEl = useRef<HTMLSpanElement | null>(null);
  const [scale, setScale] = useState(1);

  const cls = classNames(prefixCls, className, `${prefixCls}_${shape}`, {
    [`${prefixCls}_clickable`]: onClick,
  });

  const renderItem = () => {
    if (children) {
      return renderChildren();
    } else if (src) {
      return <img src={src} alt={alt} className={`${prefixCls}__img`} />;
    } else {
      return <Icon type={icon!} className={`${prefixCls}__icon`} size={size! - 10} />;
    }
  };

  const renderPresence = () => {
    return <i className={`${prefixCls}__presence ${prefixCls}__presence_${presence}`} />;
  };

  const renderChildren = () => {
    if (typeof children === 'string') {
      let textStyle: React.CSSProperties = {};
      if (textEl.current) {
        const transformString = `scale(${scale}) translateX(-50%)`;
        textStyle = {
          msTransform: transformString,
          WebkitTransform: transformString,
          transform: transformString,
        };
      }
      return (
        <span ref={textEl} className={`${prefixCls}__text`} style={textStyle}>
          {children}
        </span>
      );
    } else {
      return children;
    }
  };

  const styles: React.CSSProperties = {
    width: size!,
    height: size!,
    fontSize: size! / 2,
    lineHeight: `${size! - 4}px`,
    ...style,
  };

  useEffect(() => {
    if (outerEl.current && textEl.current && textEl.current!.className === `${prefixCls}__text`) {
      const textElWidth = textEl.current!.offsetWidth;
      const outerElWidth = outerEl.current!.offsetWidth;
      // leave 4px padding for left and right side
      if (outerElWidth - 8 < textElWidth) {
        setScale((outerElWidth - 8) / textElWidth);
      } else {
        setScale(1);
      }
    }
  });

  return (
    <span ref={outerEl} className={cls} style={styles} onClick={onClick}>
      {renderItem()}
      {presence && renderPresence()}
    </span>
  );
};

export default Avatar;
