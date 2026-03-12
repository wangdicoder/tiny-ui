import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconUndo = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M408.992 727.008l-256-256-21.984-23.008 21.984-23.008 256-256 46.016 46.016L254.016 416H672c88.16 0 160-71.84 160-160v-224h64v224c0 123.04-100.96 224-224 224H253.984l201.024 200.992L408.96 727.04z" />
      </g>
    </svg>
  );
});

IconUndo.displayName = 'IconUndo';

export { IconUndo };
