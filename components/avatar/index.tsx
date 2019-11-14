import React, { useRef, useEffect, useState } from 'react';
import classNames from 'classnames';
import Icon from '../icon';
import AvatarGroup from './avatar-group';

export type AvatarProps = {
  icon?: string;
  shape?: 'circle' | 'square';
  size?: number;
  src?: string;
  presence?: 'online' | 'busy' | 'away' | 'offline';
  alt?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  children?: React.ReactNode;
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
} & typeof defaultProps;

const defaultProps = {
  prefixCls: 'ty-avatar',
  size: 38,
  shape: 'circle',
  icon: 'user',
};

const Avatar = (props: AvatarProps) => {
  const {
    icon,
    shape,
    size,
    src,
    presence,
    alt,
    onClick,
    children,
    prefixCls,
    className,
    style,
  } = props;
  const outerEl = useRef<HTMLSpanElement>(null);
  const textEl = useRef<HTMLSpanElement>(null);
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
      return <Icon type={icon} className={`${prefixCls}__icon`} size={size - 10} />;
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

  const styles = {
    width: size,
    height: size,
    fontSize: size / 2,
    lineHeight: `${size - 4}px`,
    ...style,
  };

  useEffect(() => {
    if (outerEl.current && textEl.current && textEl.current.className === `${prefixCls}__text`) {
      const textElWidth = textEl.current.offsetWidth;
      const outerElWidth = outerEl.current.offsetWidth;
      // leave 4px padding for left and right side
      if (outerElWidth - 8 < textElWidth) {
        setScale((outerElWidth - 8) / textElWidth);
      } else {
        setScale(1);
      }
    }
  }, [prefixCls]);

  return (
    <span ref={outerEl} className={cls} style={styles} onClick={onClick}>
      {renderItem()}
      {presence && renderPresence()}
    </span>
  );
};

Avatar.defaultProps = defaultProps;

Avatar.Group = AvatarGroup;

export default Avatar;
