import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconPsd = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M192 800v-224h64V736h512v-160h64V800H192z m64-288v-256h64v64c52.64 0 96 43.36 96 96s-43.36 96-96 96H256z m272 0a79.904 79.904 0 0 1-80-80c0-44.256 35.744-80 80-80 6.944 0 16-9.056 16-16 0-9.6-3.808-16-16-16-11.776 0-13.568 2.56-14.016 3.008-0.416 0.416-1.984 2.528-1.984 9.984h-64c0-18.112 5.216-38.432 20-53.984 14.784-15.584 36.576-23.008 60-23.008 45.408 0 80 38.4 80 80 0 44.256-35.744 80-80 80-6.944 0-16 9.056-16 16 0 6.944 9.056 16 16 16 8.544 0 11.136-2.016 12.992-4a13.44 13.44 0 0 0 3.008-8.992h64c0 18.816-6.88 38.176-20.992 52.992-14.144 14.816-35.52 24-59.008 24z m112 0v-256h64c52.64 0 96 43.36 96 96v64c0 52.64-43.36 96-96 96h-64z m-320-64c17.76 0 32-14.24 32-32 0-17.76-14.24-32-32-32v64z m384 0c17.76 0 32-14.24 32-32v-64c0-17.76-14.24-32-32-32v128zM192 192v-224h640v224h-64v-160H256v160H192z" />
      </g>
    </svg>
  );
});

IconPsd.displayName = 'IconPsd';

export { IconPsd };
