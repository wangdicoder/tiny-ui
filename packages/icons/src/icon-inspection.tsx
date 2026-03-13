import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconInspection = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M512 832c-40.288 0-68.864-28.48-83.008-64H160v-800h704V768h-268.992C580.864 803.52 552.288 832 512 832z m0-64c17.76 0 32-14.24 32-32v-32h96v-64h-256V704h96V736c0 17.76 14.24 32 32 32zM224 704h96v-128h384V704h96v-672H224V704z m456.992-232.992L480 270.01599999999996l-104.992 104.96-46.016-45.984 128-128 23.008-21.984 23.008 21.984 224 224-46.016 46.016z" />
      </g>
    </svg>
  );
});

IconInspection.displayName = 'IconInspection';

export { IconInspection };
