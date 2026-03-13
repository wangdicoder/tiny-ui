import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconArrowDownLeft = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M776.992 695.008L256 173.98400000000004V480H192v-416h416v64H301.984L823.04 648.992 776.96 695.04z" />
      </g>
    </svg>
  );
});

IconArrowDownLeft.displayName = 'IconArrowDownLeft';

export { IconArrowDownLeft };
