import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconDropbox = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M64 339.1l264.2-173.5L512.5 319 246.8 483.3zM960 629.4zM960 629.4L696.8 801 512.5 647.5l265.2-164.2L512.5 319l184.3-153.4L960 337.20000000000005 777.7 483.3zM513 286.20000000000005L328.2 132.70000000000005l-79.4 51.5v-57.8L513-32l263.7 158.4v57.8l-78.9-51.5zM328.2 801L64 630.9l182.8-147.6 265.7 164.2zM64 339.1z" />
      </g>
    </svg>
  );
});

IconDropbox.displayName = 'IconDropbox';

export { IconDropbox };
