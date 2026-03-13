import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconSwitch = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M704 640H320C179.2 640 64 524.8 64 384s115.2-256 256-256h384c140.8 0 256 115.2 256 256S844.8 640 704 640z m0-448H320c-105.6 0-192 86.4-192 192s86.4 192 192 192h384c105.6 0 192-86.4 192-192s-86.4-192-192-192zM160 384a160 160 0 1 1 320 0 160 160 0 1 1-320 0z" />
      </g>
    </svg>
  );
});

IconSwitch.displayName = 'IconSwitch';

export { IconSwitch };
