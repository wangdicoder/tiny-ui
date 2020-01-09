import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';

export interface ImageProps extends React.ComponentPropsWithoutRef<'img'>, BaseProps {
  src?: string;
  placeholder?: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
  round?: boolean;
  lazy?: boolean;
  fallback?: string;
  objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
}

const Image = (props: ImageProps): React.ReactElement => {
  const {
    prefixCls = 'ty-image',
    alt = 'image',
    objectFit = 'cover',
    round = false,
    lazy = false,
    src,
    placeholder,
    fallback,
    className,
    style,
    ...otherProps
  } = props;
  const cls = classNames(prefixCls, className, { [`${prefixCls}_round`]: round });
  const ref = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (lazy && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            const lazyImage = entry.target as HTMLImageElement;
            lazyImage.src = src || fallback || '';
            observer.unobserve(lazyImage);
          }
        });
      });

      ref.current && observer.observe(ref.current);
    }
  }, []);

  return (
    <img
      ref={ref}
      className={cls}
      style={{ ...style, objectFit }}
      src={lazy ? placeholder : src ? src : fallback}
      alt={alt}
      {...otherProps}
    />
  );
};

export default Image;
