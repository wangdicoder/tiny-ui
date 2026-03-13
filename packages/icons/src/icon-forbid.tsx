import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconForbid = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M512 800C282.624 800 96 613.376 96 384s186.624-416 416-416 416 186.624 416 416S741.376 800 512 800z m0-64c194.784 0 352-157.216 352-352 0-87.232-31.68-166.592-84-228L288.992 656.992A350.528 350.528 0 0 0 512 736zM244 612l491.008-500.992A350.528 350.528 0 0 0 512 32C317.216 32 160 189.216 160 384c0 87.232 31.68 166.592 84 228z" />
      </g>
    </svg>
  );
});

IconForbid.displayName = 'IconForbid';

export { IconForbid };
