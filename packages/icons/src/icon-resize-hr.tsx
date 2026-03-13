import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconResizeHr = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M296.992 679.008l-272-272L3.008 384l21.984-23.008 272-272 46.016 46.016L126.016 352h772l-217.024-216.992 46.016-46.016 272 272 21.984 23.008-21.984 23.008-272 272L680.96 632.96 898.016 416H126.016l216.96 216.992L297.024 679.04z" />
      </g>
    </svg>
  );
});

IconResizeHr.displayName = 'IconResizeHr';

export { IconResizeHr };
