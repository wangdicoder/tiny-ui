import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconNote = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M192 800v-832h640V402.016l55.008 54.976 8.992 10.016V800H192z m64-64h448v-268.992l8.992-10.016L768 401.984V32H256V736z m512 0h64v-242.016l-32-32-32 32V736z" />
      </g>
    </svg>
  );
});

IconNote.displayName = 'IconNote';

export { IconNote };
