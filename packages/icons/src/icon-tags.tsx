import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconTags = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M483.2 105.70000000000005L861.4 484c1.7 1.7 2.5 4 2.3 6.3l-25.5 301.4c-0.7 7.8-6.8 13.9-14.6 14.6L522.2 831.7c-2.3 0.2-4.7-0.6-6.3-2.3L137.7 451.2c-3.1-3.1-3.1-8.2 0-11.3l334.2-334.2c3.1-3.2 8.2-3.2 11.3 0z m62.6 651.7l224.6-19 19-224.6L477.5 202 233.9 445.5l311.9 311.9zM605.958852 571.173768a48 48 0 1 1 67.881066 67.883435 48 48 0 1 1-67.881066-67.883435ZM889.7 356.20000000000005l-39.6 39.5c-3.1 3.1-8.2 3.1-11.3 0l-362-361.3-237.6 237c-3.1 3.1-8.2 3.1-11.3 0l-39.6-39.5c-3.1-3.1-3.1-8.2 0-11.3l243.2-242.8 39.6-39.5c3.1-3.1 8.2-3.1 11.3 0l407.3 406.6c3.1 3.1 3.1 8.2 0 11.3z" />
      </g>
    </svg>
  );
});

IconTags.displayName = 'IconTags';

export { IconTags };
