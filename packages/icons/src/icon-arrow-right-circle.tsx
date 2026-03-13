import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconArrowRightCircle = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M512 800C282.624 800 96 613.376 96 384s186.624-416 416-416 416 186.624 416 416S741.376 800 512 800z m0-64c194.784 0 352-157.216 352-352s-157.216-352-352-352S160 189.216 160 384 317.216 736 512 736z m23.008-147.008L488.96 544l128-128H288v-64h328.992l-128-128 46.016-44.992 181.984 181.984 23.008 23.008-23.008 23.008-181.984 181.984z" />
      </g>
    </svg>
  );
});

IconArrowRightCircle.displayName = 'IconArrowRightCircle';

export { IconArrowRightCircle };
