import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconArrowDown = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M862 430.7h-81c-4.6 0-9-2-12.1-5.5L550 172.89999999999998V736c0 4.4-3.6 8-8 8h-60c-4.4 0-8-3.6-8-8v-563.1L255.1 425.2c-3 3.5-7.4 5.5-12.1 5.5h-81c-6.8 0-10.5-8.1-6-13.2L487.9 35c12.7-14.7 35.5-14.7 48.3 0L868 417.5c4.5 5.2 0.8 13.2-6 13.2z" />
      </g>
    </svg>
  );
});

IconArrowDown.displayName = 'IconArrowDown';

export { IconArrowDown };
