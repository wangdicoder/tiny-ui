import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconInfo = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M512 800C282.624 800 96 613.376 96 384s186.624-416 416-416 416 186.624 416 416S741.376 800 512 800z m0-64c194.784 0 352-157.216 352-352s-157.216-352-352-352S160 189.216 160 384 317.216 736 512 736z m-32-160v-64h64v64h-64z m0-128v-256h64v256h-64z" />
      </g>
    </svg>
  );
});

IconInfo.displayName = 'IconInfo';

export { IconInfo };
