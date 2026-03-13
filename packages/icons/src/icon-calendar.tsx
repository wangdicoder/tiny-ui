import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconCalendar = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M256 768v-32H96v-704h832V736h-160V768h-64v-32H320V768H256zM160 672h96v-32h64V672h384v-32h64V672h96v-64H160V672z m0-128h704v-448H160V544z m384-96v-256h256v256h-256z m-288-32v-64h64v64H256z m128 0v-64h64v64h-64z m224-32h128v-128h-128v128zM256 288v-64h64v64H256z m128 0v-64h64v64h-64z" />
      </g>
    </svg>
  );
});

IconCalendar.displayName = 'IconCalendar';

export { IconCalendar };
