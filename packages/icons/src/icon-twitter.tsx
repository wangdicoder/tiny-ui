import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconTwitter = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M928 641.7c-30.6-13.2-63.9-22.7-98.2-26.4 35.4 21.1 62.3 54.4 75 94-32.7-19.5-69.7-33.8-108.2-41.2C765.4 701.4 721.1 722 672 722c-94.5 0-170.5-76.6-170.5-170.6 0-13.2 1.6-26.4 4.2-39.1-141.5 7.4-267.7 75-351.6 178.5-14.8-25.4-23.2-54.4-23.2-86.1 0-59.2 30.1-111.4 76-142.1-28 1.1-54.4 9-77.1 21.7v-2.1c0-82.9 58.6-151.6 136.7-167.4-14.3-3.7-29.6-5.8-44.9-5.8-11.1 0-21.6 1.1-32.2 2.6C211 244 273.9 194.89999999999998 348.8 193.29999999999995c-58.6-45.9-132-72.9-211.7-72.9-14.3 0-27.5 0.5-41.2 2.1C171.5 74 261.2 46 357.8 46 671.4 46 843 305.79999999999995 843 531.3c0 7.4 0 14.8-0.5 22.2 33.2 24.3 62.3 54.4 85.5 88.2z" />
      </g>
    </svg>
  );
});

IconTwitter.displayName = 'IconTwitter';

export { IconTwitter };
