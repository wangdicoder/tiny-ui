import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconArchive = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M192 800v-832h640V800H192z m64-64h224v-32h64V736h224v-704H256V736z m224-64v-64h64V672h-64z m0-96v-64h64v64h-64z m0-96v-70.016c-36.992-13.376-64-48.64-64-89.984 0-52.64 43.36-96 96-96s96 43.36 96 96c0 41.344-27.008 76.608-64 90.016V480h-64z m32-128c18.048 0 32-13.952 32-32 0-18.048-13.952-32-32-32-18.048 0-32 13.952-32 32 0 18.048 13.952 32 32 32z" />
      </g>
    </svg>
  );
});

IconArchive.displayName = 'IconArchive';

export { IconArchive };
