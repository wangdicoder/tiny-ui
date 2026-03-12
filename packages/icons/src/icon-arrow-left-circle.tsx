import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconArrowLeftCircle = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M512 800C282.624 800 96 613.376 96 384s186.624-416 416-416 416 186.624 416 416S741.376 800 512 800z m0-64c194.784 0 352-157.216 352-352s-157.216-352-352-352S160 189.216 160 384 317.216 736 512 736z m-23.008-147.008L307.008 407.04 284 384l23.008-23.008 181.984-181.984L535.04 224l-128 128H736v64H407.008l128 128-46.016 44.992z" />
      </g>
    </svg>
  );
});

IconArrowLeftCircle.displayName = 'IconArrowLeftCircle';

export { IconArrowLeftCircle };
