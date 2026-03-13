import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconImageFile = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M192 800v-832h640V588.992l-8.992 10.016-192 192L620.992 800H192z m64-64h320v-192h192v-512H256V736z m384-46.016L722.016 608H640V690.016zM675.008 448a32 32 0 1 1 0-64 32 32 0 0 1 0 64zM448 396.992l-23.008-21.984-128-128 46.016-46.016L448 306.01599999999996l72.992-73.024 23.008-21.984 23.008 21.984L608 274.01599999999996l72.992-73.024 46.016 46.016-96 96-23.008 21.984-23.008-21.984L544 301.98400000000004l-72.992 73.024-23.008 21.984z" />
      </g>
    </svg>
  );
});

IconImageFile.displayName = 'IconImageFile';

export { IconImageFile };
