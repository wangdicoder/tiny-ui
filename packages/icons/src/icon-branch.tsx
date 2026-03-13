import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconBranch = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const { size = '1em', color = 'currentColor', className, style, ...rest } = props;
  return (
    <svg
      ref={ref}
      viewBox="0 0 1024 1024"
      width={size}
      height={size}
      fill={color}
      className={className}
      style={{ verticalAlign: "middle", ...style }}
      {...rest}
    >
      <g transform="translate(0, 896) scale(1, -1)">
        <path d="M740 735c-61.8 0-112-50.2-112-112 0-50.1 33.1-92.6 78.5-106.9v-95.9L320 293.6V577.9c44.2 15 76 56.9 76 106.1 0 61.8-50.2 112-112 112s-112-50.2-112-112c0-49.2 31.8-91 76-106.1V190c-44.2-15-76-56.9-76-106.1 0-61.8 50.2-112 112-112s112 50.2 112 112c0 49.2-31.8 91-76 106.1v27.8l423.5 138.7c20.9 6.8 34.9 26.2 34.9 48.2V517.8c42.9 15.8 73.6 57 73.6 105.2 0 61.8-50.2 112-112 112z m-504-51c0 26.5 21.5 48 48 48s48-21.5 48-48-21.5-48-48-48-48 21.5-48 48z m96-600c0-26.5-21.5-48-48-48s-48 21.5-48 48 21.5 48 48 48 48-21.5 48-48z m408 491c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48z" />
      </g>
    </svg>
  );
});

IconBranch.displayName = 'IconBranch';

export { IconBranch };
