import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconHierarchy = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M384 736v-256h96v-64H160v-128H64v-256h256v256H224v64h256v-64h-96v-256h256v256h-96v64h256v-64h-96v-256h256v256h-96v128H544v64h96V736h-256z m64-64h128v-128h-128V672zM128 224h128v-128H128v128z m320 0h128v-128h-128v128z m320 0h128v-128h-128v128z" />
      </g>
    </svg>
  );
});

IconHierarchy.displayName = 'IconHierarchy';

export { IconHierarchy };
