import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconCheckCircle1 = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M512 800C281.6 800 96 614.4 96 384s185.6-416 416-416 416 185.6 416 416c0 44.8-6.016 89.408-22.016 131.008L854.016 464c6.4-25.6 10.016-51.2 10.016-80 0-195.2-156.8-352-352-352S160 188.79999999999995 160 384 316.8 736 512 736c96 0 182.208-38.208 243.008-99.008L800 681.984C726.4 755.5840000000001 624 800 512 800z m360.992-136.992L512 301.98400000000004l-136.992 137.024-46.016-46.016 160-160 23.008-21.984 23.008 21.984 384 384L872.96 663.04z" />
      </g>
    </svg>
  );
});

IconCheckCircle1.displayName = 'IconCheckCircle1';

export { IconCheckCircle1 };
