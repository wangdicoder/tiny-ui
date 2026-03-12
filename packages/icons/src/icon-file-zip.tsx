import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconFileZip = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M192 800v-224h64V736h512v-160h64V800H192z m96-288v-64h82.016l-77.024-128-4.992-7.008V256h160v64h-82.016l77.024 128 4.992 7.008V512H288z m224 0v-256h64v256h-64z m128 0v-256h64v96h16c44.256 0 80 35.744 80 80S764.256 512 720 512H640z m64-64h16c6.944 0 16-9.056 16-16 0-6.944-9.056-16-16-16H704v32zM192 192v-224h640v224h-64v-160H256v160H192z" />
      </g>
    </svg>
  );
});

IconFileZip.displayName = 'IconFileZip';

export { IconFileZip };
