import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconBookmark = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M224 736v-736l51.008 38.016L512 216l236.992-178.016L800 0V736H224z m64-64h448v-544l-204.992 154.016L512 296l-19.008-14.016L288 128V672z" />
      </g>
    </svg>
  );
});

IconBookmark.displayName = 'IconBookmark';

export { IconBookmark };
