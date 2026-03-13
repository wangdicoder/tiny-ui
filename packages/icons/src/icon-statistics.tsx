import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconStatistics = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M480 768v-32H128v-576h768V736H544V768h-64zM192 672h640v-448H192V672z m480-83.008l-23.008-21.984L512 430.016l-104.992 104.96-23.008 22.016-23.008-21.984-96-96L311.04 392.96 384 465.984l104.992-104.96 23.008-22.016 23.008 21.984L672 498.016l40.992-41.024 46.016 46.016-64 64L672 588.992zM416 128l-64-128h64l64 128h-64z m128 0l64-128h64l-64 128h-64z" />
      </g>
    </svg>
  );
});

IconStatistics.displayName = 'IconStatistics';

export { IconStatistics };
