import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconLeft = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M724 677.7V755c0 6.7-7.7 10.4-12.9 6.3L260.3 409.2c-16.4-12.8-16.4-37.5 0-50.3l450.8-352.1c5.3-4.1 12.9-0.4 12.9 6.3v77.3c0 4.9-2.3 9.6-6.1 12.6l-360 281 360 281.1c3.8 3 6.1 7.7 6.1 12.6z" />
      </g>
    </svg>
  );
});

IconLeft.displayName = 'IconLeft';

export { IconLeft };
