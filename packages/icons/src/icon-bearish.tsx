import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconBearish = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M144.992 731.008L111.04 676.992l229.984-144 23.008-13.984 18.016 19.008 32 33.984L576 451.008l22.016-16 20 19.008 28 27.968 156-124.992-68-4.992 4-64 149.984 10.016 34.016 1.984-4 34.016-19.008 149.984-64-8 8.992-71.008-180.992 144.992-22.016 18.016-20-20.992-28-28L428.992 640l-23.008 16.992-19.968-20.992-33.024-35.008-208 130.016zM96 512v-448h64V512H96z m128-64v-384h64V448H224z m128-64v-320h64V384h-64z m128-64v-256h64v256h-64z m128-64v-192h64v192h-64z m128-64v-128h64v128h-64z m128-64v-64h64v64h-64z" />
      </g>
    </svg>
  );
});

IconBearish.displayName = 'IconBearish';

export { IconBearish };
