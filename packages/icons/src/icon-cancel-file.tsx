import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconCancelFile = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M192 800v-832h376.992c47.008-58.496 118.4-96 199.008-96 140.992 0 256 115.008 256 256 0 118.752-82.016 218.304-192 247.008V588.992l-8.992 10.016-192 192L620.992 800H192z m64-64h320v-192h192v-160c-140.992 0-256-115.008-256-256 0-34.112 6.816-66.208 19.008-96H256V736z m384-46.016L722.016 608H640V690.016zM768 320c41.472 0 79.68-13.824 111.008-36l-267.008-267.008A191.84 191.84 0 0 0 576 128c0 106.432 85.568 192 192 192z m156-80.992A191.84 191.84 0 0 0 960 128c0-106.432-85.568-192-192-192a191.84 191.84 0 0 0-111.008 36l267.008 267.008z" />
      </g>
    </svg>
  );
});

IconCancelFile.displayName = 'IconCancelFile';

export { IconCancelFile };
