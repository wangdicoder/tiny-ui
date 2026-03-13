import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconCheckmark = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M904.992 695.008L352 141.98400000000004 119.008 375.03999999999996 72.96 328.96000000000004l256-256 23.008-21.984 23.008 21.984 576 576L904.96 695.04z" />
      </g>
    </svg>
  );
});

IconCheckmark.displayName = 'IconCheckmark';

export { IconCheckmark };
