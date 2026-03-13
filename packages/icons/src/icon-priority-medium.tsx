import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconPriorityMedium = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M512 844.992l-23.008-22.976-415.008-415.04-22.976-22.976 22.976-23.008 415.04-414.976 22.976-23.04 23.008 23.04L949.984 360.96000000000004l23.04 23.008-23.04 23.008L535.04 822.016 512 844.96z m0-89.984L882.016 384 512 13.984000000000037 141.984 384 512 755.008zM352 432a48 48 0 1 1 0-96 48 48 0 0 1 0 96z m160 0a48 48 0 1 1 0-96 48 48 0 0 1 0 96z m160 0a48 48 0 1 1 0-96 48 48 0 0 1 0 96z" />
      </g>
    </svg>
  );
});

IconPriorityMedium.displayName = 'IconPriorityMedium';

export { IconPriorityMedium };
