import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconPriorityHigh = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M512-76.99199999999996l23.008 22.976 415.008 415.04 22.976 22.976-22.976 23.008-415.04 414.97600001-22.976 23.03999999-23.008-23.04L74.016 407.04l-23.04-23.008 23.03999999-23.008L488.96-54.01599999999996 512-76.96000001000004z m0 89.98400001L141.984 384 512 754.016 882.016 384 512 12.99200000999997zM544 192l0 258.016 104.992-105.024 46.016 46.016-160 160-23.008 21.984-23.008-21.984-160-160 46.016-46.016L480 449.984 480 192l64 0z" />
      </g>
    </svg>
  );
});

IconPriorityHigh.displayName = 'IconPriorityHigh';

export { IconPriorityHigh };
