import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconSplitHorizontal = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M512 812.992l-23.008-21.984-160-160L375.04 584.96 480 689.984V480H0v-64h1024v64H544V690.016l104.992-105.024L695.04 631.04l-160 160L512 812.992zM0 352v-64h480v-210.016l-104.992 105.024-46.016-46.016 160-160 23.008-21.984 23.008 21.984 160 160-46.016 46.016L544 77.98400000000004V288h480v64H0z" />
      </g>
    </svg>
  );
});

IconSplitHorizontal.displayName = 'IconSplitHorizontal';

export { IconSplitHorizontal };
