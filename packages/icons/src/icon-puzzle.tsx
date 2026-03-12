import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconPuzzle = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M544 800a128 128 0 0 1-128-128H224v-160a128 128 0 0 1-128-128 128 128 0 0 1 128-128v-160h192a128 128 0 0 1 128-128 128 128 0 0 1 128 128h192v224h-64c-38.08 0-64 25.92-64 64s25.92 64 64 64h64V672h-192a128 128 0 0 1-128 128z m0-64c38.08 0 64-25.92 64-64v-64h192v-96a128 128 0 0 1-128-128 128 128 0 0 1 128-128v-96h-192v-64c0-38.08-25.92-64-64-64s-64 25.92-64 64v64H288v160H224c-38.08 0-64 25.92-64 64s25.92 64 64 64h64V608h192V672c0 38.08 25.92 64 64 64z" />
      </g>
    </svg>
  );
});

IconPuzzle.displayName = 'IconPuzzle';

export { IconPuzzle };
