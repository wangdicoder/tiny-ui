import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconCalculator = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M192 800v-832h640V800H192z m64-64h512v-704H256V736z m64-64v-192h384V672H320z m64-64h256v-64h-256V608z m-32-192v-64h64v64h-64z m128 0v-64h64v64h-64z m128 0v-64h64v64h-64z m-256-128v-64h64v64h-64z m128 0v-64h64v64h-64z m128 0v-64h64v64h-64z m-256-128v-64h64v64h-64z m128 0v-64h64v64h-64z m128 0v-64h64v64h-64z" />
      </g>
    </svg>
  );
});

IconCalculator.displayName = 'IconCalculator';

export { IconCalculator };
