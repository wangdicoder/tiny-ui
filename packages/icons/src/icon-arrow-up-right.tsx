import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconArrowUpRight = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M416 704v-64h306.016L200.96 119.00800000000004 247.04 72.96000000000004 768 594.0160000000001V288h64V704H416z" />
      </g>
    </svg>
  );
});

IconArrowUpRight.displayName = 'IconArrowUpRight';

export { IconArrowUpRight };
