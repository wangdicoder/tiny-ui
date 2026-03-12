import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconBack = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M424.992 679.008l-272-272-21.984-23.008 21.984-23.008 272-272 46.016 46.016L254.016 352H896v64H253.984l217.024 216.992L424.96 679.04z" />
      </g>
    </svg>
  );
});

IconBack.displayName = 'IconBack';

export { IconBack };
