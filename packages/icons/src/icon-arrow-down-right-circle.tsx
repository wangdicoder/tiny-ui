import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconArrowDownRightCircle = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M512 800C282.624 800 96 613.376 96 384s186.624-416 416-416 416 186.624 416 416S741.376 800 512 800z m0-64c194.784 0 352-157.216 352-352s-157.216-352-352-352S160 189.216 160 384 317.216 736 512 736z m-136.992-168.992L328.96 520.96 561.984 288H384v-64h288v288h-64v-178.016l-232.992 233.024z" />
      </g>
    </svg>
  );
});

IconArrowDownRightCircle.displayName = 'IconArrowDownRightCircle';

export { IconArrowDownRightCircle };
