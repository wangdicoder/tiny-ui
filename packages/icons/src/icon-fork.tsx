import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconFork = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const { size = '1em', color = 'currentColor', className, style, ...rest } = props;
  return (
    <svg
      ref={ref}
      viewBox="0 0 1024 1024"
      width={size}
      height={size}
      fill={color}
      className={className}
      style={style}
      {...rest}
    >
      <g transform="translate(0, 896) scale(1, -1)">
        <path d="M752 796c-61.8 0-112-50.2-112-112 0-47.7 29.9-88.5 72-104.6v-27.6L512 294.6 312 551.8v27.6c42.1 16.1 72 56.9 72 104.6 0 61.8-50.2 112-112 112s-112-50.2-112-112c0-50.6 33.8-93.5 80-107.3v-34.4c0-9.7 3.3-19.3 9.3-27L476 223.70000000000005v-33.6c-44.2-15-76-56.9-76-106.1 0-61.8 50.2-112 112-112s112 50.2 112 112c0 49.2-31.8 91-76 106.1v33.6l226.7 291.6c6 7.7 9.3 17.3 9.3 27v34.4c46.2 13.8 80 56.7 80 107.3 0 61.8-50.2 112-112 112zM224 684c0 26.5 21.5 48 48 48s48-21.5 48-48-21.5-48-48-48-48 21.5-48 48z m336-600c0-26.5-21.5-48-48-48s-48 21.5-48 48 21.5 48 48 48 48-21.5 48-48z m192 552c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48z" />
      </g>
    </svg>
  );
});

IconFork.displayName = 'IconFork';

export { IconFork };
