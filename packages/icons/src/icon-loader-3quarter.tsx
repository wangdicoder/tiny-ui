import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconLoader3quarter = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M783.530667 655.530667L723.2 595.2A298.666667 298.666667 0 1 1 810.666667 384h85.333333a384 384 0 1 0-112.469333 271.530667z" />
      </g>
    </svg>
  );
});

IconLoader3quarter.displayName = 'IconLoader3quarter';

export { IconLoader3quarter };
