import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconCollect = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M480 800v-178.016L423.008 679.04 376.96 632.96l112-112 23.008-21.984 23.008 21.984 112 112L600.96 679.04 544 621.9839999999999V800h-64z m-216.992-280.992L216.96 472.96 274.016 416H96v-64h178.016L216.96 295.00800000000004 263.04 248.96000000000004l112 112 21.984 23.008-21.984 23.008-112 112z m497.984 0l-112-112-21.984-23.008 21.984-23.008 112-112 46.016 46.016L749.984 352H928v64h-178.016l57.024 56.992-46.016 46.016zM512 448a64 64 0 1 1 0-128 64 64 0 0 1 0 128z m0-179.008l-23.008-21.984-112-112 46.016-46.016L480 146.01599999999996V-32h64v178.016l56.992-57.024 46.016 46.016-112 112-23.008 21.984z" />
      </g>
    </svg>
  );
});

IconCollect.displayName = 'IconCollect';

export { IconCollect };
