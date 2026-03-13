import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconProjector = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M0 640v-512h64v-32h128v32h640v-32h128v32h64V640H0z m64-64h896v-384H64V576z m672-32c-88 0-160-72-160-160s72-160 160-160 160 72 160 160-72 160-160 160zM128 480v-64h64v64H128z m128 0v-64h64v64H256z m128 0v-64h64v64h-64z m352 0c53.408 0 96-42.592 96-96s-42.592-96-96-96-96 42.592-96 96 42.592 96 96 96zM128 352v-64h64v64H128z m128 0v-64h64v64H256z m128 0v-64h64v64h-64z" />
      </g>
    </svg>
  );
});

IconProjector.displayName = 'IconProjector';

export { IconProjector };
