import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconOrganization = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M128 800v-832h352v128h64v-128h352V800H128z m64-64h640v-704h-224v128h-192v-128H192V736z m64-64v-64h128V672H256z m192 0v-64h128V672h-128z m192 0v-64h128V672h-128zM256 544v-64h128v64H256z m192 0v-64h128v64h-128z m192 0v-64h128v64h-128zM256 416v-64h128v64H256z m192 0v-64h128v64h-128z m192 0v-64h128v64h-128zM256 288v-64h128v64H256z m192 0v-64h128v64h-128z m192 0v-64h128v64h-128zM256 160v-64h128v64H256z m384 0v-64h128v64h-128z" />
      </g>
    </svg>
  );
});

IconOrganization.displayName = 'IconOrganization';

export { IconOrganization };
