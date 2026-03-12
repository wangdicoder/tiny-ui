import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconLoaderCircle = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M130.346667 341.33333300000004H216.32a298.752 298.752 0 0 1 591.274667 0h86.016a384.042667 384.042667 0 0 0-763.306667 0z m0 85.333334a384.042667 384.042667 0 0 0 763.306666 0H807.68a298.752 298.752 0 0 1-591.274667 0H130.346667z" />
      </g>
    </svg>
  );
});

IconLoaderCircle.displayName = 'IconLoaderCircle';

export { IconLoaderCircle };
