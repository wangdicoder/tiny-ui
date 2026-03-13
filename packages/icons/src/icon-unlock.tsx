import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconUnlock = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M512 800c-97.152 0-178.688-62.912-212-148l59.008-24C383.328 690.08 442.752 736 512 736c88.16 0 160-71.84 160-160v-96H192v-512h640V480h-96v96c0 123.04-100.96 224-224 224zM256 416h512v-384H256V416z" />
      </g>
    </svg>
  );
});

IconUnlock.displayName = 'IconUnlock';

export { IconUnlock };
