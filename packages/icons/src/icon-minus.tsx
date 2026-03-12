import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconMinus = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M872 422H152c-4.4 0-8-3.6-8-8v-60c0-4.4 3.6-8 8-8h720c4.4 0 8 3.6 8 8v60c0 4.4-3.6 8-8 8z" />
      </g>
    </svg>
  );
});

IconMinus.displayName = 'IconMinus';

export { IconMinus };
