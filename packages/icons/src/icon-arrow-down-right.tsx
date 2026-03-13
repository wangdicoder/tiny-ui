import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconArrowDownRight = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M247.008 695.008L200.96 648.96 722.016 128H416v-64h416V480h-64v-306.016L247.008 695.04z" />
      </g>
    </svg>
  );
});

IconArrowDownRight.displayName = 'IconArrowDownRight';

export { IconArrowDownRight };
