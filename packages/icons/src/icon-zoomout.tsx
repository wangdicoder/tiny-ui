import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconZoomout = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M637 453H325c-4.4 0-8-3.6-8-8v-60c0-4.4 3.6-8 8-8h312c4.4 0 8 3.6 8 8v60c0 4.4-3.6 8-8 8z m284-424L775 175c122.1 148.9 113.6 369.5-26 509-148 148.1-388.4 148.1-537 0-148.1-148.6-148.1-389 0-537 139.5-139.6 360.1-148.1 509-26l146-146c3.2-2.8 8.3-2.8 11 0l43 43c2.8 2.7 2.8 7.8 0 11zM696 200c-118.8-118.7-311.2-118.7-430 0-118.7 118.8-118.7 311.2 0 430 118.8 118.7 311.2 118.7 430 0 118.7-118.8 118.7-311.2 0-430z" />
      </g>
    </svg>
  );
});

IconZoomout.displayName = 'IconZoomout';

export { IconZoomout };
