import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconViewFile = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M192 800v-832h346.016l64 64H256V736h320v-192h192v-172.992c19.2 6.4 41.6 12.992 64 12.992V588.992L620.992 800H192z m448-108.992L723.008 608H640V691.008zM848 320c-96.832 0-176-79.168-176-176 0-37.088 11.2-71.552 31.008-100l-118.016-116.992 46.016-46.016 116.992 118.016c28.48-19.776 62.912-31.008 100-31.008 96.832 0 176 79.168 176 176S944.832 320 848 320z m0-64c62.24 0 112-49.76 112-112S910.24 32 848 32a111.52 111.52 0 0 0-112 112c0 62.24 49.76 112 112 112z" />
      </g>
    </svg>
  );
});

IconViewFile.displayName = 'IconViewFile';

export { IconViewFile };
