import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconOpenArchive = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M192 800v-832h640V800H192z m96-64h448l12.992-35.008c6.4 3.2 12.608 3.008 19.008 3.008v-672H256V704s12.608 0.192 19.008-3.008L288 736z m70.016-12.992L320 672c12.8-9.6 25.184-22.208 38.016-35.008l48 40.992c-16 16-32 32.224-48 45.024z m307.968-3.008c-16-12.8-32-28.992-48-44.992l48-41.024c12.8 16 25.216 28.416 38.016 38.016l-38.016 48zM448 627.008l-54.016-38.016c12.8-12.8 22.4-28.8 32-48l57.024 32c-12.8 19.2-22.208 38.016-35.008 54.016z m128 0c-12.8-16-25.408-34.816-35.008-54.016l57.024-32c9.6 19.2 19.392 35.008 28.992 51.008L576 627.008z m-64-112l-60.992-24.992c6.4-19.2 12.608-35.84 19.008-55.04L512 448l44.992-12.992c3.2 19.2 9.6 35.808 16 55.008L512 514.944zM480 384v-70.016c-36.992-13.376-64-48.64-64-89.984 0-52.64 43.36-96 96-96s96 43.36 96 96c0 41.344-27.008 76.608-64 90.016V384h-64z m32-128c18.048 0 32-13.952 32-32 0-18.048-13.952-32-32-32-18.048 0-32 13.952-32 32 0 18.048 13.952 32 32 32z" />
      </g>
    </svg>
  );
});

IconOpenArchive.displayName = 'IconOpenArchive';

export { IconOpenArchive };
