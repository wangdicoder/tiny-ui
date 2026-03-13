import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconBroadcast = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M960 747.008l-40.992-12L185.984 512H64v-256h122.016l62.976-19.008-0.992-2.976v-1.024c-20.544-67.616 17.504-142.72 88-164 0.32-0.096 0.704 0.096 0.992 0 67.904-20.64 143.104 16.96 164 88l0.992 3.008 417.024-127.008 40.992-12V747.008z m-64-86.016v-553.984L200.992 319.00800000000004 196.992 320H128v128h68.992l4 0.992L896 660.992zM309.984 218.01599999999996l131.008-39.04-0.992-2.976v-0.992c-11.008-37.408-50.752-55.68-84.992-45.024-37.408 11.008-56.704 49.76-46.016 84v1.024l0.992 2.976z" />
      </g>
    </svg>
  );
});

IconBroadcast.displayName = 'IconBroadcast';

export { IconBroadcast };
