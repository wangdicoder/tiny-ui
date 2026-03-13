import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconRedo = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M615.008 727.008L568.96 680.96 770.016 480H352c-123.04 0-224-100.96-224-224v-224h64v224c0 88.16 71.84 160 160 160h418.016l-201.024-200.992 46.016-46.016 256 256 21.984 23.008-21.984 23.008-256 256z" />
      </g>
    </svg>
  );
});

IconRedo.displayName = 'IconRedo';

export { IconRedo };
