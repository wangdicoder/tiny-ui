import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconDown = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M884 640h-75c-5.1 0-9.9-2.5-12.9-6.6L512 241.79999999999995 227.9 633.4c-3 4.1-7.8 6.6-12.9 6.6h-75c-6.5 0-10.3-7.4-6.5-12.7l352.6-486.1c12.8-17.6 39-17.6 51.7 0l352.6 486.1c3.9 5.3 0.1 12.7-6.4 12.7z" />
      </g>
    </svg>
  );
});

IconDown.displayName = 'IconDown';

export { IconDown };
