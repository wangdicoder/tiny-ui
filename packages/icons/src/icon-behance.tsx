import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconBehance = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M634 601.7h199.5v-48.4H634zM434.1 410.2c44.1 21.1 67.2 53.2 67.2 102.8 0 98.1-73 121.9-157.3 121.9H112v-492.4h238.5c89.4 0 173.3 43 173.3 143 0 61.8-29.2 107.5-89.7 124.7zM220.2 550.9h101.5c39.1 0 74.2-10.9 74.2-56.3 0-41.8-27.3-58.6-66-58.6H220.2V550.9z m115.5-324.8H220.1V361.70000000000005H338c47.6 0 77.7-19.9 77.7-70.3 0-49.6-35.9-65.3-80-65.3zM911.5 315.6c0 105.5-61.7 193.4-173.3 193.4-108.5 0-182.3-81.7-182.3-188.8 0-111 69.9-187.2 182.3-187.2 85.1 0 140.2 38.3 166.7 120h-86.3c-9.4-30.5-47.6-46.5-77.3-46.5-57.4 0-87.4 33.6-87.4 90.7h256.9c0.3 5.9 0.7 12.1 0.7 18.4zM653.9 359c3.1 46.9 34.4 76.2 81.2 76.2 49.2 0 73.8-28.9 78.1-76.2H653.9z" />
      </g>
    </svg>
  );
});

IconBehance.displayName = 'IconBehance';

export { IconBehance };
