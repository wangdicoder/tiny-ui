import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconKey = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M640 800c-158.24 0-288-129.76-288-288 0-16.64 2.72-31.296 4.992-46.016L104.992 215.03999999999996 96 204.99199999999996V-32h224v96h96v96h96V255.00800000000004c37.792-18.496 81.76-31.008 128-31.008 158.24 0 288 129.76 288 288s-129.76 288-288 288z m0-64c123.36 0 224-100.64 224-224s-100.64-224-224-224a236.032 236.032 0 0 0-108.992 28l-8 4H448v-96h-96v-96H256v-96H160v146.016l252.992 253.984 12 11.008-3.008 16.992c-3.2 19.2-5.984 36.352-5.984 52 0 123.36 100.64 224 224 224z m64-96a64 64 0 1 1 0-128 64 64 0 0 1 0 128z" />
      </g>
    </svg>
  );
});

IconKey.displayName = 'IconKey';

export { IconKey };
