import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconWallet = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M880 784H144c-17.7 0-32-14.3-32-32v-736c0-17.7 14.3-32 32-32h736c17.7 0 32 14.3 32 32V752c0 17.7-14.3 32-32 32z m-40-464H528V448h312v-128z m0-264H184V712h656v-200H496c-17.7 0-32-14.3-32-32v-192c0-17.7 14.3-32 32-32h344v-200zM620 384m-40 0a40 40 0 1 1 80 0 40 40 0 1 1-80 0Z" />
      </g>
    </svg>
  );
});

IconWallet.displayName = 'IconWallet';

export { IconWallet };
