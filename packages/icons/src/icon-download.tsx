import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconDownload = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M480 768v-530.016L311.008 407.04 264.96 360.96000000000004l224-224 23.008-21.984 23.008 21.984 224 224-46.016 46.016L544 238.01599999999996V768h-64zM224 32v-64h576v64H224z" />
      </g>
    </svg>
  );
});

IconDownload.displayName = 'IconDownload';

export { IconDownload };
