import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconOvertime = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M320 800c-140.992 0-256-115.008-256-256 0-94.4 51.648-176.608 128-220.992V32h704V672h-160V704h-64v-32h-131.008C496.64 748.352 414.4 800 320 800z m0-64c106.432 0 192-85.568 192-192s-85.568-192-192-192-192 85.568-192 192 85.568 192 192 192zM288 672v-146.016L232.992 471.04 279.04 424.96l64 64 8.992 10.016V672H288z m279.008-64H672v-32h64V608h96v-64h-256c0 22.24-3.616 43.392-8.992 64z m0-128H832v-384H256v200.992A251.904 251.904 0 0 1 320 288c118.752 0 218.304 82.016 247.008 192zM576 352v-64h64v64h-64z m128 0v-64h64v64h-64z m-384-128v-64h64v64h-64z m128 0v-64h64v64h-64z m128 0v-64h64v64h-64z m128 0v-64h64v64h-64z" />
      </g>
    </svg>
  );
});

IconOvertime.displayName = 'IconOvertime';

export { IconOvertime };
