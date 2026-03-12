import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconBusinessCard = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M96 704v-640h832V704H96z m64-64h704v-512h-108.992c-2.56 4.384-1.376 10.368-5.024 14.016C737.92 154.048 720.736 160 704 160s-33.92-5.92-46.016-18.016c-3.616-3.616-2.432-9.6-4.992-13.984h-281.984c-2.56 4.384-1.376 10.368-4.992 14.016C353.92 154.048 336.672 160 320 160c-16.704 0-33.92-5.92-46.016-18.016-3.616-3.616-2.432-9.6-4.992-13.984H160V640z m224-64c-70.304 0-128-57.696-128-128 0-35.648 15.2-67.712 39.008-91.008A161.344 161.344 0 0 1 224 224h64c0 52.96 43.04 96 96 96s96-43.04 96-96h64a161.344 161.344 0 0 1-71.008 132.992C496.8 380.288 512 412.352 512 448c0 70.304-57.696 128-128 128z m0-64c35.712 0 64-28.288 64-64s-28.288-64-64-64-64 28.288-64 64 28.288 64 64 64z m224-32v-64h192v64h-192z m0-128v-64h192v64h-192z" />
      </g>
    </svg>
  );
});

IconBusinessCard.displayName = 'IconBusinessCard';

export { IconBusinessCard };
