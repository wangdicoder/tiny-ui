import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconRuler = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M0 640v-512h1024V640H0z m64-64h96v-224h64v224h64v-128h64v128h64v-224h64v224h64v-128h64v128h64v-224h64v224h64v-128h64v128h96v-384H64V576z" />
      </g>
    </svg>
  );
});

IconRuler.displayName = 'IconRuler';

export { IconRuler };
