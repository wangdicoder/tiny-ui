import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconEye = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M942.2 409.8C847.4 609.5 704.1 710 512 710c-192.2 0-335.4-100.5-430.2-300.3-7.7-16.2-7.7-35.2 0-51.5C176.6 158.5 319.9 58 512 58c192.2 0 335.4 100.5 430.2 300.3 7.7 16.2 7.7 35 0 51.5zM512 130c-161.3 0-279.4 81.8-362.7 254C232.6 556.2 350.7 638 512 638c161.3 0 279.4-81.8 362.7-254C791.5 211.79999999999995 673.4 130 512 130zM508 560c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z m0-288c-61.9 0-112 50.1-112 112s50.1 112 112 112 112-50.1 112-112-50.1-112-112-112z" />
      </g>
    </svg>
  );
});

IconEye.displayName = 'IconEye';

export { IconEye };
