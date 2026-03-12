import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconLeftFill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M512 832C264.6 832 64 631.4 64 384s200.6-448 448-448 448 200.6 448 448S759.4 832 512 832z m104-316.9c0-10.2-4.9-19.9-13.2-25.9L457.4 384l145.4-105.2c8.3-6 13.2-15.6 13.2-25.9V206c0-6.5-7.4-10.3-12.7-6.5l-246 178c-4.4 3.2-4.4 9.7 0 12.9l246 178c5.3 3.8 12.7 0.1 12.7-6.5v-46.8z" />
      </g>
    </svg>
  );
});

IconLeftFill.displayName = 'IconLeftFill';

export { IconLeftFill };
