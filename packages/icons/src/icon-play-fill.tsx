import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconPlayFill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M512 832C264.6 832 64 631.4 64 384s200.6-448 448-448 448 200.6 448 448S759.4 832 512 832z m144.1-454.9L437.7 218.20000000000005c-1.4-1-3-1.5-4.7-1.5-4.4 0-8 3.6-8 8V542.3c0 1.7 0.5 3.3 1.5 4.7 2.6 3.6 7.6 4.4 11.2 1.8L656.1 390c0.7-0.5 1.3-1.1 1.8-1.8 2.6-3.5 1.8-8.5-1.8-11.1z" />
      </g>
    </svg>
  );
});

IconPlayFill.displayName = 'IconPlayFill';

export { IconPlayFill };
