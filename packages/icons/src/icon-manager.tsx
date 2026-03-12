import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconManager = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M512 768c-123.328 0-224-100.672-224-224 0-76.064 38.72-143.488 96.992-184C253.664 308.76800000000003 160 180.79999999999995 160 32h64c0 140.8 102.144 258.368 236 283.008L480 256h64l20 59.008C697.856 290.36800000000005 800 172.76800000000003 800 32h64c0 148.8-93.664 276.768-224.992 328C697.28 400.512 736 467.936 736 544c0 123.328-100.672 224-224 224z m0-64c88.736 0 160-71.264 160-160s-71.264-160-160-160-160 71.264-160 160 71.264 160 160 160z m-32-480l-32-192h128l-32 192h-64z" />
      </g>
    </svg>
  );
});

IconManager.displayName = 'IconManager';

export { IconManager };
