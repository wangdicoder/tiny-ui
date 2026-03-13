import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconLibrary = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M512 771.008l-12-4.992-384-160L96 596.96V512h64v-352H96v-160h832v160h-64V512h64V596.992l-20 8.992-384 160L512 771.04z m0-70.016L812 576H212L512 700.992zM224 512h64v-352H224V512z m128 0h64v-352h-64V512z m128 0h64v-352h-64V512z m128 0h64v-352h-64V512z m128 0h64v-352h-64V512zM160 96h704v-32H160v32z" />
      </g>
    </svg>
  );
});

IconLibrary.displayName = 'IconLibrary';

export { IconLibrary };
