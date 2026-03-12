import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconUser = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M512 768c-123.328 0-224-100.672-224-224a224.608 224.608 0 0 1 98.016-184.992A319.808 319.808 0 0 1 192 64h64c0 142.944 113.056 256 256 256 142.944 0 256-113.056 256-256h64a319.808 319.808 0 0 1-194.016 295.008A224.608 224.608 0 0 1 736 544c0 123.328-100.672 224-224 224z m0-64c88.736 0 160-71.264 160-160s-71.264-160-160-160-160 71.264-160 160 71.264 160 160 160z" />
      </g>
    </svg>
  );
});

IconUser.displayName = 'IconUser';

export { IconUser };
