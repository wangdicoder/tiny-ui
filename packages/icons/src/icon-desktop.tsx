import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconDesktop = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M928 756H96c-17.7 0-32-14.3-32-32v-496c0-17.7 14.3-32 32-32h380v-112H304c-8.8 0-16-7.2-16-16v-48c0-4.4 3.6-8 8-8h432c4.4 0 8 3.6 8 8v48c0 8.8-7.2 16-16 16H548V196h380c17.7 0 32 14.3 32 32V724c0 17.7-14.3 32-32 32z m-40-488H136V684h752v-416z" />
      </g>
    </svg>
  );
});

IconDesktop.displayName = 'IconDesktop';

export { IconDesktop };
