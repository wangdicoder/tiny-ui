import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconStructure = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M640 736v-112l-256-179.008V512H64v-256h320V323.00800000000004l256-179.008V32h320v256H640V220.99199999999996L407.008 384 640 547.008V480h320V736H640z m64-64h192v-128h-192V672zM128 448h192v-128H128v128z m576-224h192v-128h-192v128z" />
      </g>
    </svg>
  );
});

IconStructure.displayName = 'IconStructure';

export { IconStructure };
