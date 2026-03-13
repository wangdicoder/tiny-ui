import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconCursor = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M288 812.992V-4.991999999999962l52.992 44 128.992 108 65.024-129.024 13.984-28.992 29.024 15.008 98.976 51.008 28 13.984-13.984 29.024-59.008 116 162.016 20 64.96 8L813.024 288 343.04 759.008 288 812.992z m64-155.008l370.016-368.96-144-17.024-45.024-6.016 21.024-40.96 65.984-128-42.016-22.016-68.992 137.984-19.008 36-30.976-25.984L352 132.99199999999996V658.016z" />
      </g>
    </svg>
  );
});

IconCursor.displayName = 'IconCursor';

export { IconCursor };
