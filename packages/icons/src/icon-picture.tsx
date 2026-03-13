import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconPicture = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M64 736v-704h896V736H64z m64-64h768v-444.992l-168.992 169.984-23.008 23.008-23.008-23.008-121.984-121.984-184 185.984-23.008 23.008-23.008-23.008L128 260V672z m640-64a64 64 0 1 1 0-128 64 64 0 0 1 0 128z m-416-215.008L646.016 96H128v72.992l224 224z m352-64l192-192V96h-159.008l-132.992 134.016L704 328.96000000000004z" />
      </g>
    </svg>
  );
});

IconPicture.displayName = 'IconPicture';

export { IconPicture };
