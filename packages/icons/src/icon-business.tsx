import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconBusiness = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M448 800c-16.704 0-33.92-5.92-46.016-18.016C389.92 769.92 384 752.704 384 736v-32H96v-640h832V704h-288V736c0 16.704-5.92 33.92-18.016 46.016C609.92 794.048 592.736 800 576 800h-128z m0-64h128v-32h-128V736zM160 640h704v-192c0-38.08-25.92-64-64-64H224c-38.08 0-64 25.92-64 64V640z m128-128v-96h64v96H288z m384 0v-96h64v96h-64zM160 337.98400000000004A127.68 127.68 0 0 1 224 320h576c23.36 0 45.12 7.072 64 18.016V128H160v210.016z" />
      </g>
    </svg>
  );
});

IconBusiness.displayName = 'IconBusiness';

export { IconBusiness };
