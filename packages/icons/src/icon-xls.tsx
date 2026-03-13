import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconXls = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M192 800v-224h64V736h512v-160h64V800H192z m64-288l64-128-64-128h64l32 64 32-64h64l-64 128 64 128h-64l-32-64-32 64H256z m224 0v-256h128v64h-64v192h-64z m240 0a79.904 79.904 0 0 1-80-80c0-44.256 35.744-80 80-80 6.944 0 16-9.056 16-16 0-9.6-3.808-16-16-16-11.776 0-13.568 2.56-14.016 3.008-0.416 0.416-1.984 2.528-1.984 9.984h-64c0-18.112 5.216-38.432 20-53.984 14.784-15.584 36.576-23.008 60-23.008 45.408 0 80 38.4 80 80 0 44.256-35.744 80-80 80-6.944 0-16 9.056-16 16 0 6.944 9.056 16 16 16 8.544 0 11.136-2.016 12.992-4a13.44 13.44 0 0 0 3.008-8.992h64c0 18.816-6.88 38.176-20.992 52.992-14.144 14.816-35.52 24-59.008 24zM192 192v-224h640v224h-64v-160H256v160H192z" />
      </g>
    </svg>
  );
});

IconXls.displayName = 'IconXls';

export { IconXls };
