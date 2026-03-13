import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconOpenedFolder = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M160 800v-794.016l24.992-4.992 384-80 39.008-8V0h192V402.016l55.008 54.976 8.992 10.016V800H160z m292-64H800v-242.016l-55.008-54.976-8.992-10.016V64h-128v284.992l-8.992 10.016L544 413.984V713.024l-24 6.016L452 736zM224 727.008l256-64v-276l8.992-10.016L544 322.01599999999996V-9.024000000000001L224 57.98400000000004V727.04z" />
      </g>
    </svg>
  );
});

IconOpenedFolder.displayName = 'IconOpenedFolder';

export { IconOpenedFolder };
