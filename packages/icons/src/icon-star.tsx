import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconStar = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M908.1 542.9l-253.9 36.9L540.7 809.9c-3.1 6.3-8.2 11.4-14.5 14.5-15.8 7.8-35 1.3-42.9-14.5L369.8 579.8l-253.9-36.9c-7-1-13.4-4.3-18.3-9.3-12.3-12.7-12.1-32.9 0.6-45.3l183.7-179.1-43.4-252.9c-1.2-6.9-0.1-14.1 3.2-20.3 8.2-15.6 27.6-21.7 43.2-13.4L512 142l227.1-119.4c6.2-3.3 13.4-4.4 20.3-3.2 17.4 3 29.1 19.5 26.1 36.9l-43.4 252.9 183.7 179.1c5 4.9 8.3 11.3 9.3 18.3 2.7 17.5-9.5 33.7-27 36.3zM664.8 334.4l36.1-210.3L512 223.29999999999995 323.1 124l36.1 210.3-152.8 149L417.6 514 512 705.3 606.4 514l211.2-30.7-152.8-148.9z" />
      </g>
    </svg>
  );
});

IconStar.displayName = 'IconStar';

export { IconStar };
