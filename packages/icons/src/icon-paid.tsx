import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconPaid = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M512 796.992l-23.008-21.984L225.984 512H64v-192h40l88.992-296.992 7.008-23.008h624l7.008 23.008L920 320H960v192h-162.016L535.04 775.008 512 796.992z m0-91.008L706.016 512H318.016L512 706.016zM128 448h768v-64h-24l-7.008-23.008L776 64H248l-88.992 296.992L152 384H128v64z m520.992-72.992L480 205.98400000000004l-104.992 105.024-46.016-46.016 128-128 23.008-21.984 23.008 21.984 192 192-46.016 46.016z" />
      </g>
    </svg>
  );
});

IconPaid.displayName = 'IconPaid';

export { IconPaid };
