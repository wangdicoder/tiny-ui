import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconMinusFill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M512 832C264.6 832 64 631.4 64 384s200.6-448 448-448 448 200.6 448 448S759.4 832 512 832z m192-472c0-4.4-3.6-8-8-8H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8v-48z" />
      </g>
    </svg>
  );
});

IconMinusFill.displayName = 'IconMinusFill';

export { IconMinusFill };
