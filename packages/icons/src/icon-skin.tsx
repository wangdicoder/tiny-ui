import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconSkin = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M870 770H663.8c-17.4 0-32.9-11.9-37-29.3C614.3 687.9 567 650 512 650s-102.3 37.9-114.8 90.7c-4.1 17.4-19.5 29.3-37 29.3H154c-24.3 0-44-19.7-44-44v-252c0-24.3 19.7-44 44-44h75v-388c0-24.3 19.7-44 44-44h478c24.3 0 44 19.7 44 44V430h75c24.3 0 44 19.7 44 44V726c0 24.3-19.7 44-44 44z m-28-268H723v-432H301V502H182V698h153.3c28.2-71.2 97.5-120 176.7-120s148.5 48.8 176.7 120H842v-196z" />
      </g>
    </svg>
  );
});

IconSkin.displayName = 'IconSkin';

export { IconSkin };
