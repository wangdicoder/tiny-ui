import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconSplitVertical = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M416 800v-384H141.984l105.024 104.992L200.96 567.04l-160-160L19.008 384l21.984-23.008 160-160L247.04 247.03999999999996 141.984 352H416v-384h64V800h-64z m128 0v-832h64V352h274.016l-105.024-104.992 46.016-46.016 160 160 21.984 23.008-21.984 23.008-160 160-46.016-46.016L882.016 416H608V800h-64z" />
      </g>
    </svg>
  );
});

IconSplitVertical.displayName = 'IconSplitVertical';

export { IconSplitVertical };
