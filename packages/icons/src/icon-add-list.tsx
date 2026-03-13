import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconAddList = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M128 736v-704h403.008c38.208-93.44 130.08-160 236.992-160 140.992 0 256 115.008 256 256 0 94.4-51.648 176.608-128 220.992V736H128z m64-64h640v-296.992A251.904 251.904 0 0 1 768 384v32H384v-64h260a254.944 254.944 0 0 1-75.008-64H384v-64h147.008a251.744 251.744 0 0 1-17.024-128H192V672z m64-128v-64h64v64H256z m128 0v-64h384v64H384z m-128-128v-64h64v64H256z m512-96c106.432 0 192-85.568 192-192s-85.568-192-192-192-192 85.568-192 192 85.568 192 192 192zM256 288v-64h64v64H256z m480-32v-96h-96v-64h96v-96h64v96h96v64h-96v96h-64z" />
      </g>
    </svg>
  );
});

IconAddList.displayName = 'IconAddList';

export { IconAddList };
