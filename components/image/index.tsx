import React, { useContext, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';

export interface ImageProps extends BaseProps, React.PropsWithoutRef<JSX.IntrinsicElements['img']> {
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
    alt = 'image',
    objectFit = 'cover',
    round = false,
    lazy = false,
    prefixCls: customisedCls,
    src,
    placeholder,
    fallback,
    className,
    style,
    ...otherProps
  } = props;
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('image', configContext.prefixCls, customisedCls);
  const cls = classNames(prefixCls, className, { [`${prefixCls}_round`]: round });
  const ref = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (lazy && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            const lazyImage = entry.target as HTMLImageElement;
            lazyImage.src = src || fallback || '';
            observer.unobserve(lazyImage);
          }
        });
      });

      ref.current && observer.observe(ref.current);
    }
  }, [fallback, lazy, src]);

  return (
    <img
      {...otherProps}
      ref={ref}
      className={cls}
      style={{ ...style, objectFit }}
      src={lazy ? placeholder : src ? src : fallback}
      alt={alt}
    />
  );
};

Image.displayName = 'Image';

export default Image;
