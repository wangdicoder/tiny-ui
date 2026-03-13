import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconLock = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M512 800c-123.04 0-224-100.96-224-224v-96H192v-512h640V480h-96v96c0 123.04-100.96 224-224 224z m0-64c88.16 0 160-71.84 160-160v-96H352v96c0 88.16 71.84 160 160 160zM256 416h512v-384H256V416z" />
      </g>
    </svg>
  );
});

IconLock.displayName = 'IconLock';

export { IconLock };
