import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconCloseCircle = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M512 800C282.624 800 96 613.376 96 384s186.624-416 416-416 416 186.624 416 416S741.376 800 512 800z m0-64c194.784 0 352-157.216 352-352s-157.216-352-352-352S160 189.216 160 384 317.216 736 512 736z m-120.992-184.992L344.96 504.96 465.984 384l-120.96-120.992 45.984-46.016L512 338.01599999999996l120.992-121.024 46.016 46.016L557.984 384l121.024 120.992-46.016 46.016L512 430.016l-120.992 120.96z" />
      </g>
    </svg>
  );
});

IconCloseCircle.displayName = 'IconCloseCircle';

export { IconCloseCircle };
