import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconArrowLeft = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M872 422H286.9l350.2 304c5.6 4.9 2.2 14-5.2 14h-88.5c-3.9 0-7.6-1.4-10.5-3.9L155 408.2c-14.7-12.8-14.7-35.6 0-48.3L535.1 30c1.5-1.3 3.3-2 5.2-2h91.5c7.4 0 10.8 9.2 5.2 14L286.9 346H872c4.4 0 8 3.6 8 8v60c0 4.4-3.6 8-8 8z" />
      </g>
    </svg>
  );
});

IconArrowLeft.displayName = 'IconArrowLeft';

export { IconArrowLeft };
