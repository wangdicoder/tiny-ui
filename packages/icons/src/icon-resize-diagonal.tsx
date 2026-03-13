import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconResizeDiagonal = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M448 736v-64h306.016L224 141.98400000000004V448H160v-416h416v64H269.984L800 626.0160000000001V320h64V736H448z" />
      </g>
    </svg>
  );
});

IconResizeDiagonal.displayName = 'IconResizeDiagonal';

export { IconResizeDiagonal };
