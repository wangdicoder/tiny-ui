import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconResizeAll = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M128 768v-288h64V658.016L466.016 384 192 109.98400000000004V288H128v-288h288v64H237.984L512 338.01599999999996 786.016 64H608v-64h288v288h-64v-178.016L557.984 384 832 658.016V480h64V768h-288v-64h178.016L512 429.984 237.984 704H416V768H128z" />
      </g>
    </svg>
  );
});

IconResizeAll.displayName = 'IconResizeAll';

export { IconResizeAll };
