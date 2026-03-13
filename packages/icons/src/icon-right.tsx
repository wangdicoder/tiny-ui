import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconRight = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M765.7 409.2L314.9 761.3c-5.3 4.1-12.9 0.4-12.9-6.3v-77.3c0-4.9 2.3-9.6 6.1-12.6l360-281.1-360-281.1c-3.9-3-6.1-7.7-6.1-12.6V13c0-6.7 7.7-10.4 12.9-6.3l450.8 352.1c16.4 12.8 16.4 37.6 0 50.4z" />
      </g>
    </svg>
  );
});

IconRight.displayName = 'IconRight';

export { IconRight };
