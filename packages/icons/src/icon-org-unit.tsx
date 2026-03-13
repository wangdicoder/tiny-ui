import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconOrgUnit = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M128 768v-256h96v-256H128v-256h256v96h256v-96h256v256h-96v256h96V768h-256v-96h-256V768H128z m64-64h128v-128H192V704z m512 0h128v-128h-128V704zM384 608h256v-96h96v-256h-96v-96h-256v96H288v256h96V608z m320-416h128v-128h-128v128z" />
      </g>
    </svg>
  );
});

IconOrgUnit.displayName = 'IconOrgUnit';

export { IconOrgUnit };
