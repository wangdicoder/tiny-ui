import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconPlus = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M480.256 768l0-768 62.464 0 1.024 768-63.488 0zM896 415.744l-768 0 0-62.464 768-1.024 0 63.488z" />
      </g>
    </svg>
  );
});

IconPlus.displayName = 'IconPlus';

export { IconPlus };
