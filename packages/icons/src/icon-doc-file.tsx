import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconDocFile = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M192 800v-224h64V736h512v-160h64V800H192z m64-288v-256h64c52.64 0 96 43.36 96 96v64c0 52.64-43.36 96-96 96H256z m272 0a79.904 79.904 0 0 1-80-80v-96c0-44.256 35.744-80 80-80s80 35.744 80 80v96c0 44.256-35.744 80-80 80z m192 0a79.904 79.904 0 0 1-80-80v-96c0-44.256 35.744-80 80-80s80 35.744 80 80V352h-64v-16c0-6.944-9.056-16-16-16-6.944 0-16 9.056-16 16v96c0 6.944 9.056 16 16 16 6.944 0 16-9.056 16-16v-16h64v16c0 44.256-35.744 80-80 80zM320 448c17.76 0 32-14.24 32-32v-64c0-17.76-14.24-32-32-32v128z m208 0c6.944 0 16-9.056 16-16v-96c0-6.944-9.056-16-16-16-6.944 0-16 9.056-16 16v96c0 6.944 9.056 16 16 16zM192 192v-224h640v224h-64v-160H256v160H192z" />
      </g>
    </svg>
  );
});

IconDocFile.displayName = 'IconDocFile';

export { IconDocFile };
