import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconCommentSquare = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M96 704v-640h306.016l86.976-87.008 23.008-21.984 23.008 21.984L621.984 64H928V704H96z m64-64h704v-512h-268.992l-10.016-8.992L512 45.98400000000004l-72.992 73.024-10.016 8.992H160V640z m128-96v-64h448v64H288z m0-128v-64h448v64H288z m0-128v-64h320v64H288z" />
      </g>
    </svg>
  );
});

IconCommentSquare.displayName = 'IconCommentSquare';

export { IconCommentSquare };
