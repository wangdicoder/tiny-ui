import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconResizeVer = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M512 828.992l-23.008-21.984-256-256L279.04 504.96 480 705.984v-644L279.008 263.03999999999996 232.96 216.96000000000004l256-256 23.008-21.984 23.008 21.984 256 256-46.016 46.016L544 61.98400000000004V705.984l200.992-200.96 46.016 45.984-256 256L512 828.992z" />
      </g>
    </svg>
  );
});

IconResizeVer.displayName = 'IconResizeVer';

export { IconResizeVer };
