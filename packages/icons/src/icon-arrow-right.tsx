import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconArrowRight = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M869 408.2L491.2 736.1c-2.9 2.5-6.6 3.9-10.5 3.9h-88.5c-7.4 0-10.8-9.2-5.2-14l350.2-304H152c-4.4 0-8-3.6-8-8v-60c0-4.4 3.6-8 8-8h585.1L386.9 42c-5.6-4.9-2.2-14 5.2-14h91.5c1.9 0 3.8 0.7 5.2 2L869 359.79999999999995c14.7 12.8 14.7 35.6 0 48.4z" />
      </g>
    </svg>
  );
});

IconArrowRight.displayName = 'IconArrowRight';

export { IconArrowRight };
