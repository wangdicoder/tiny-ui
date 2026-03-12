import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconFaq = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M128 768v-64H36l32.992-50.016L128 565.9839999999999V288h192v-288h576v246.016l59.008 88L988 384H896v64h-160V768H128z m64-64h480v-352H192V586.0160000000001l-4.992 8L156 640H192V704z m224-64c-52.64 0-96-43.36-96-96s43.36-96 96-96h32v-64h64V640h-96z m0-64h32v-64h-32c-17.76 0-32 14.24-32 32 0 17.76 14.24 32 32 32z m320-192h96v-64h36l-31.008-46.016-4.992-8V64H384v224h164.992L480 128h64l14.016 32h100L672 128h64l-68.992 160H736v96z m-128-107.008L631.008 224H584.96L608 276.99199999999996z" />
      </g>
    </svg>
  );
});

IconFaq.displayName = 'IconFaq';

export { IconFaq };
