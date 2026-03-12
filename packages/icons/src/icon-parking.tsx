import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconParking = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M512 800C282.624 800 96 613.376 96 384s186.624-416 416-416 416 186.624 416 416S741.376 800 512 800z m0-64c194.784 0 352-157.216 352-352s-157.216-352-352-352S160 189.216 160 384 317.216 736 512 736z m-128-160v-384h64v128h128a128 128 0 0 1 128 128 128 128 0 0 1-128 128h-192z m64-64h128c38.08 0 64-25.92 64-64s-25.92-64-64-64h-128v128z" />
      </g>
    </svg>
  );
});

IconParking.displayName = 'IconParking';

export { IconParking };
