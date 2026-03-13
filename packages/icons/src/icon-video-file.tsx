import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconVideoFile = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M192 800v-832h640V588.992l-8.992 10.016-192 192L620.992 800H192z m64-64h320v-192h192v-512H256V736z m384-46.016L722.016 608H640V690.016z m-224-216.96v-306.016l48 29.984 160 96L670.016 320l-46.016 27.008-160 96-48 29.984z m64-113.024L547.008 320 480 280v80z" />
      </g>
    </svg>
  );
});

IconVideoFile.displayName = 'IconVideoFile';

export { IconVideoFile };
