import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconFavouriteFile = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M192 800v-832h640V588.992l-8.992 10.016-192 192L620.992 800H192z m64-64h320v-192h192v-512H256V736z m384-46.016L722.016 608H640V690.016z m-128-180.992L457.984 384 320 368l102.016-92.992-28.032-134.016L512 208l118.016-67.008-28 134.016L704 368l-138.016 16L512 508.992z m0-160l12.992-28.992 29.024-3.008-23.04-18.976 7.04-29.024-26.016 16-26.016-16 7.04 29.024-23.04 21.984 29.024 3.008 12.992 25.984z" />
      </g>
    </svg>
  );
});

IconFavouriteFile.displayName = 'IconFavouriteFile';

export { IconFavouriteFile };
