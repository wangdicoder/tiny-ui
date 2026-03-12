import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconLoaderQuarter = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M512 768a384 384 0 0 0 384-384h-85.333333a298.666667 298.666667 0 0 1-298.666667 298.666667V768z" />
      </g>
    </svg>
  );
});

IconLoaderQuarter.displayName = 'IconLoaderQuarter';

export { IconLoaderQuarter };
