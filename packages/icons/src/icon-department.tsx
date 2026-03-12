import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconDepartment = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M512 771.008l-12.992-6.016-352-160-19.008-8V0h352v192h64v-192h352V596.992l-19.008 8-352 160L512 771.008z m0-70.016l320-144.992V64h-224v192h-192v-192H192V556l320 144.992zM256 512v-64h128v64H256z m192 0v-64h128v64h-128z m192 0v-64h128v64h-128zM256 384v-64h128v64H256z m192 0v-64h128v64h-128z m192 0v-64h128v64h-128zM256 256v-64h128v64H256z m384 0v-64h128v64h-128z" />
      </g>
    </svg>
  );
});

IconDepartment.displayName = 'IconDepartment';

export { IconDepartment };
