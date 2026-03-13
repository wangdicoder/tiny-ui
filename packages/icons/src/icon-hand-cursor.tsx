import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconHandCursor = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M416 832c-52.64 0-96-43.36-96-96v-378.016l-20.992 22.016-8 7.008a94.912 94.912 0 0 1-134.016 0 94.912 94.912 0 0 1 0-134.016v-0.992l262.016-259.008 1.984-0.992 0.992-2.016c43.2-32.384 98.08-53.984 160-53.984h55.04a261.536 261.536 0 0 1 261.984 262.016V448c0 52.64-43.36 96-96 96-13.632 0-26.24-3.776-38.016-8.992C754.496 576.608 716.672 608 672 608c-24.544 0-46.944-9.6-64-24.992A95.392 95.392 0 0 1 544 608c-11.296 0-21.888-2.336-32-6.016V736c0 52.64-43.36 96-96 96z m0-64c17.76 0 32-14.24 32-32v-352h64v128c0 17.76 14.24 32 32 32 17.76 0 32-14.24 32-32v-128h64v128c0 17.76 14.24 32 32 32 17.76 0 32-14.24 32-32v-128h67.008v64c0 17.76 14.24 32 32 32 17.728 0 32-14.24 32-32v-250.016c0-110.912-87.072-197.984-198.016-197.984h-54.976c-46.88 0-87.392 16.768-121.024 42.016l-259.008 256c-14.272 14.272-14.272 29.696 0 44 14.304 14.272 29.76 14.272 44 0l83.008-83.008L384 204V736c0 17.76 14.24 32 32 32z" />
      </g>
    </svg>
  );
});

IconHandCursor.displayName = 'IconHandCursor';

export { IconHandCursor };
