import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconExpired = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M384 768c-141.76 0-256-114.24-256-256a256 256 0 0 1 230.016-255.008L259.968 80 233.984 32H918.016l-26.016 48-252.992 455.008C624.48 665.408 516.416 768 384 768z m0-64c72.224 0 133.984-40 167.008-100l-3.008-6.016-154.016-276.992c-3.2-0.384-4.928-0.992-9.984-0.992-107.84 0-192 84.16-192 192s84.16 192 192 192z m-32-64v-146.016L296.992 439.04l46.016-46.016 64 64 8.992 10.016V640h-64z m224-123.008L808.992 96H343.04L576 516.992zM544 384v-160h64v160h-64z m0-192v-64h64v64h-64z" />
      </g>
    </svg>
  );
});

IconExpired.displayName = 'IconExpired';

export { IconExpired };
