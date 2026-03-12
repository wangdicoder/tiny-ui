import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconCheckFile = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M192 800v-832h376.992c47.008-58.496 118.4-96 199.008-96 140.992 0 256 115.008 256 256 0 118.752-82.016 218.304-192 247.008V588.992l-8.992 10.016-192 192L620.992 800H192z m64-64h320v-192h192v-160c-140.992 0-256-115.008-256-256 0-34.112 6.816-66.208 19.008-96H256V736z m384-46.016L722.016 608H640V690.016zM768 320c106.432 0 192-85.568 192-192s-85.568-192-192-192-192 85.568-192 192 85.568 192 192 192z m104.992-104.992L768 109.98400000000004l-72.992 73.024-46.016-46.016 96-96 23.008-21.984 23.008 21.984 128 128-46.016 46.016z" />
      </g>
    </svg>
  );
});

IconCheckFile.displayName = 'IconCheckFile';

export { IconCheckFile };
