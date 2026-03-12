import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconBullish = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M722.016 760.992l-11.008-62.976 64.992-11.008-136.992-86.016-33.024 35.008-20 20.992-22.976-16.992-164-120.992-28 28-20 20.992-22.016-18.016-240-192 40-49.984 217.024 174.016 27.968-28.032 20.032-18.976 21.984 16 162.016 120.992 32-34.016 17.984-18.976 23.008 13.984 164 103.008-17.024-72 62.016-15.008 35.008 148 8 33.024L868.992 736l-146.976 24.992zM864 512v-448h64V512h-64z m-128-64v-384h64V448h-64z m-128-64v-320h64V384h-64z m-128-64v-256h64v256h-64z m-128-64v-192h64v192h-64z m-128-64v-128h64v128H224z m-128-64v-64h64v64H96z" />
      </g>
    </svg>
  );
});

IconBullish.displayName = 'IconBullish';

export { IconBullish };
