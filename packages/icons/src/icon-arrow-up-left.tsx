import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconArrowUpLeft = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M192 704v-416h64V594.0160000000001L776.992 72.96000000000004l46.016 46.016L301.984 640H608V704H192z" />
      </g>
    </svg>
  );
});

IconArrowUpLeft.displayName = 'IconArrowUpLeft';

export { IconArrowUpLeft };
