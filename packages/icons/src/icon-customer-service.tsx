import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconCustomerService = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M512 768c-212.1 0-384-171.9-384-384v-360c0-13.3 10.7-24 24-24h184c35.3 0 64 28.7 64 64V272c0 35.3-28.7 64-64 64H200v48c0 172.3 139.7 312 312 312s312-139.7 312-312v-48H688c-35.3 0-64-28.7-64-64v-208c0-35.3 28.7-64 64-64h184c13.3 0 24 10.7 24 24V384c0 212.1-171.9 384-384 384zM328 264v-192H200V264h128z m496-192H696V264h128v-192z" />
      </g>
    </svg>
  );
});

IconCustomerService.displayName = 'IconCustomerService';

export { IconCustomerService };
