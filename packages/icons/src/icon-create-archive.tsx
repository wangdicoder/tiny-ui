import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconCreateArchive = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M192 800v-832h376.992c47.008-58.496 118.4-96 199.008-96 140.992 0 256 115.008 256 256 0 118.752-82.016 218.304-192 247.008V800H192z m64-64h512v-352c-62.72 0-120.416-23.328-164.992-60.992 3.008 9.248 4.992 18.784 4.992 28.992 0 41.344-27.008 76.608-64 90.016V512h-64v-70.016c-36.992-13.376-64-48.64-64-89.984 0-52.64 43.36-96 96-96 14.72 0 28.48 3.968 40.992 10.016A254.24 254.24 0 0 1 512 128c0-34.112 6.816-66.208 19.008-96H256V736z m224-32v-64h64V704h-64z m0-96v-64h64V608h-64z m32-224c18.048 0 32-13.952 32-32 0-18.048-13.952-32-32-32-18.048 0-32 13.952-32 32 0 18.048 13.952 32 32 32z m256-64c106.432 0 192-85.568 192-192s-85.568-192-192-192-192 85.568-192 192 85.568 192 192 192z m-32-64v-96h-96v-64h96v-96h64v96h96v64h-96v96h-64z" />
      </g>
    </svg>
  );
});

IconCreateArchive.displayName = 'IconCreateArchive';

export { IconCreateArchive };
