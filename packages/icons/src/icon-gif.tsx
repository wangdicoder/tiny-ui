import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconGif = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M192 800v-224h64V736h512v-160h64V800H192z m147.008-288a79.904 79.904 0 0 1-80-80v-96c0-44.256 35.712-80 80-80h80v128h-64v-64h-16c-6.944 0-16 9.056-16 16v96c0 6.944 9.056 16 16 16 6.912 0 16-9.056 16-16v-16h64v16c0 44.256-35.744 80-80 80zM480 512v-256h64v256h-64z m128 0v-256h64v96h64v64h-64v32h96v64h-160zM192 192v-224h640v224h-64v-160H256v160H192z" />
      </g>
    </svg>
  );
});

IconGif.displayName = 'IconGif';

export { IconGif };
