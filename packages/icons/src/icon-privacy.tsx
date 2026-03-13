import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconPrivacy = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M512 800c-123.04 0-224-100.96-224-224v-96H192v-512h640V480h-96v96c0 123.04-100.96 224-224 224z m0-64c88.16 0 160-71.84 160-160v-96H352v96c0 88.16 71.84 160 160 160zM256 416h512v-384H256V416z m256-32c-88 0-160-72-160-160s72-160 160-160 160 72 160 160-72 160-160 160z m0-64c53.408 0 96-42.592 96-96s-42.592-96-96-96-96 42.592-96 96 42.592 96 96 96z m0-32c-35.2 0-64-28.8-64-64s28.8-64 64-64 64 28.8 64 64c0 6.4 0.192 12.608-3.008 19.008-6.4-12.8-16.192-19.008-28.992-19.008-19.2 0-32 12.8-32 32 0 12.8 6.208 22.592 19.008 28.992-6.4 3.2-12.608 3.008-19.008 3.008z" />
      </g>
    </svg>
  );
});

IconPrivacy.displayName = 'IconPrivacy';

export { IconPrivacy };
