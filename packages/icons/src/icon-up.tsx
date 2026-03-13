import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconUp = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M890.5 140.70000000000005L537.9 626.8c-12.8 17.6-39 17.6-51.7 0L133.5 140.70000000000005c-3.8-5.3-0.1-12.7 6.5-12.7h75c5.1 0 9.9 2.5 12.9 6.6L512 526.2l284.1-391.6c3-4.1 7.8-6.6 12.9-6.6h75c6.5 0 10.3 7.4 6.5 12.7z" />
      </g>
    </svg>
  );
});

IconUp.displayName = 'IconUp';

export { IconUp };
