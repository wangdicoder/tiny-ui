import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconPackage = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M128 768v-768h768V768H128z m64-64h640v-640H192V704z m240-64a79.904 79.904 0 0 1-80-80c0-44.256 35.744-80 80-80h160c44.256 0 80 35.744 80 80S636.256 640 592 640h-160z m0-64h160c6.944 0 16-9.056 16-16 0-6.944-9.056-16-16-16h-160c-6.944 0-16 9.056-16 16 0 6.944 9.056 16 16 16z m176-256l-32-32v-64h64v64l-32 32z m128 0l-32-32v-64h64v64l-32 32z m-160-128v-64h192v64h-192z" />
      </g>
    </svg>
  );
});

IconPackage.displayName = 'IconPackage';

export { IconPackage };
