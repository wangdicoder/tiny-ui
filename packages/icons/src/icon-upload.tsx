import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconUpload = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M512 780.992l-23.008-21.984-224-224L311.04 488.96 480 657.984V128h64V658.016l168.992-169.024 46.016 46.016-224 224L512 780.992zM224 64v-64h576v64H224z" />
      </g>
    </svg>
  );
});

IconUpload.displayName = 'IconUpload';

export { IconUpload };
