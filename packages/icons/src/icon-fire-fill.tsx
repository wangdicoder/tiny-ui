import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconFireFill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M834.1 426.8c-19.5 43.8-47.4 82.6-82.9 115.2l-29.1 26.7c-4.3 3.8-11.1 2.1-13-3.3l-13-37.3c-8.1-23.4-23-47.3-44.1-70.8-1.4-1.5-3-1.9-4.1-2-1.1-0.1-2.8 0.1-4.3 1.5-1.4 1.2-2.1 3-2 4.8 3.7 60.2-14.3 128.1-53.7 202C555.3 725 510 772.9 453.4 806.3l-41.3 24.3c-5.4 3.2-12.3-1-12-7.3l2.2-48c1.5-32.8-2.3-61.8-11.3-85.9-11-29.5-26.8-56.9-47-81.5-14.2-17.2-30.1-32.7-47.5-46.1-42.1-32.3-76.8-74.4-100.3-121.5C172.5 392.7 160 339.4 160 286c0-47.2 9.3-92.9 27.7-136 17.8-41.5 43.2-78.9 75.5-110.9 32.4-32 70-57.2 111.9-74.7C418.5-53.799999999999955 464.5-63 512-63s93.5 9.2 136.9 27.3c41.9 17.5 79.6 42.6 111.9 74.7 32.4 32 57.8 69.4 75.5 110.9 18.4 43.1 27.7 88.8 27.7 136 0 48.8-10 96.2-29.9 140.9z" />
      </g>
    </svg>
  );
});

IconFireFill.displayName = 'IconFireFill';

export { IconFireFill };
