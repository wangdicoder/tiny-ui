import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconWifi = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M723 275.5C666.8 324.4 593.4 354 513 354s-153.8-29.6-210.1-78.6c-3.2-2.8-3.6-7.8-0.8-11.2l36-42.9c2.9-3.4 8-3.8 11.4-0.9C393.1 258.79999999999995 450.3 282 513 282s119.9-23.2 163.5-61.5c3.4-2.9 8.5-2.5 11.4 0.9l36 42.9c2.8 3.3 2.4 8.3-0.9 11.2z m117.4 140.1C751.7 489.5 637.6 534 513 534s-238.7-44.5-327.5-118.4c-3.4-2.8-3.8-7.9-1-11.3l36-42.9c2.8-3.4 7.9-3.8 11.2-1C308 423.8 406.1 462 513 462s205-38.2 281.2-101.6c3.4-2.8 8.4-2.4 11.2 1l36 42.9c2.8 3.4 2.4 8.5-1 11.3z m116.7 139C835.7 654.2 680.3 714 511 714c-168.2 0-322.6-59-443.7-157.4-3.5-2.8-4-7.9-1.1-11.4l36-42.9c2.8-3.3 7.8-3.8 11.1-1.1C222 589.3 360.3 642 511 642c151.8 0 291-53.5 400-142.7 3.4-2.8 8.4-2.3 11.2 1.1l36 42.9c2.9 3.4 2.4 8.5-1.1 11.3zM448 118a64 64 0 1 1 128 0 64 64 0 1 1-128 0z" />
      </g>
    </svg>
  );
});

IconWifi.displayName = 'IconWifi';

export { IconWifi };
