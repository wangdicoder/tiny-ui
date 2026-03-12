import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconGoogle = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M881 453.6H519.7v-148.5h206.4c-8.9-48-35.9-88.6-76.6-115.8-34.4-23-78.3-36.6-129.9-36.6-99.9 0-184.4 67.5-214.6 158.2-7.6 23-12 47.6-12 72.9s4.4 49.9 12 72.9c30.3 90.6 114.8 158.1 214.7 158.1 56.3 0 106.8-19.4 146.6-57.4l110 110.1c-66.5 62-153.2 100-256.6 100-149.9 0-279.6-86-342.7-211.4-26-51.8-40.8-110.4-40.8-172.4S151 263.20000000000005 177 211.39999999999998C240.1 86 369.8 0 519.7 0c103.6 0 190.4 34.4 253.8 93 72.5 66.8 114.4 165.2 114.4 282.1 0 27.2-2.4 53.3-6.9 78.5z" />
      </g>
    </svg>
  );
});

IconGoogle.displayName = 'IconGoogle';

export { IconGoogle };
