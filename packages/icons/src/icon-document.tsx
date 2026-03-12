import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconDocument = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M192 800v-832h640V588.992l-8.992 10.016-192 192L620.992 800H192z m64-64h320v-192h192v-512H256V736z m384-46.016L722.016 608H640V690.016zM352 480v-64h320v64H352z m0-128v-64h320v64H352z m0-128v-64h320v64H352z" />
      </g>
    </svg>
  );
});

IconDocument.displayName = 'IconDocument';

export { IconDocument };
