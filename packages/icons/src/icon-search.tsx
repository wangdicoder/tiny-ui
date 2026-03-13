import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconSearch = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M909.6 41.5L649.9 301.20000000000005C690.2 353.29999999999995 712 417 712 484c0 80.2-31.3 155.4-87.9 212.1-56.6 56.7-132 87.9-212.1 87.9s-155.5-31.3-212.1-87.9C143.2 639.5 112 564.2 112 484c0-80.1 31.3-155.5 87.9-212.1C256.5 215.20000000000005 331.8 184 412 184c67 0 130.6 21.8 182.7 62l259.7-259.6c3.2-3.2 8.4-3.2 11.6 0l43.6 43.5c3.2 3.2 3.2 8.4 0 11.6zM570.4 325.6C528 283.29999999999995 471.8 260 412 260s-116 23.3-158.4 65.6C211.3 368 188 424.2 188 484s23.3 116.1 65.6 158.4C296 684.7 352.2 708 412 708s116.1-23.2 158.4-65.6S636 543.8 636 484s-23.3-116.1-65.6-158.4z" />
      </g>
    </svg>
  );
});

IconSearch.displayName = 'IconSearch';

export { IconSearch };
