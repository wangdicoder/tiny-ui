import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconCheckSquare = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M128 768v-768h768V506.016l-64-64V64H192V704h634.016l64 64H128z m744.992-104.992L512 301.98400000000004l-136.992 137.024-46.016-46.016 160-160 23.008-21.984 23.008 21.984 384 384L872.96 663.04z" />
      </g>
    </svg>
  );
});

IconCheckSquare.displayName = 'IconCheckSquare';

export { IconCheckSquare };
