import { useContext, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { ImageProps } from './types';

const Image = (props: ImageProps): JSX.Element => {
  const {
    alt = 'image',
    objectFit = 'cover',
    round = false,
    lazy = false,
    src,
    placeholder,
    fallback,
    className,
    style,
    prefixCls: customisedCls,
    ...otherProps
  } = props;
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('image', configContext.prefixCls, customisedCls);
  const cls = classNames(prefixCls, className, { [`${prefixCls}_round`]: round });
  const ref = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (!lazy || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const lazyImage = entry.target as HTMLImageElement;
          lazyImage.src = src || fallback || '';
          obs.unobserve(lazyImage);
        }
      });
    });

    const imgNode = ref.current;
    imgNode && observer.observe(imgNode);

    return () => {
      observer.disconnect();
    };
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
