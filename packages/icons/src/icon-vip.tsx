import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconVip = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M64 608v-16.992l0.992-4.992 128-435.008 7.008-23.008h80l7.008 23.008 128 434.976L416 591.04V608h-64v-7.008L240 220 128 600.992V608H64z m416 0v-480h64V608h-64z m160 0v-480h64v192h112c78.752 0 144 65.248 144 144S894.752 608 816 608H640z m64-64h112c42.848 0 80-37.152 80-80S858.848 384 816 384H704v160z" />
      </g>
    </svg>
  );
});

IconVip.displayName = 'IconVip';

export { IconVip };
