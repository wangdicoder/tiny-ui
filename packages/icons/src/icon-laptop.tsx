import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconLaptop = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M224 160h576V571.2C800 591.52 785.664 608 768 608H256c-17.696 0-32-16.48-32-36.8V224h576v-64H224z m-0.96-64H128a64 64 0 0 0-64 64h96V608.3199999999999C160 643.456 188.8 672 223.712 672H800.32C835.488 672 864 643.264 864 608.3199999999999V160h96a64 64 0 0 0-64-64H223.072z" />
      </g>
    </svg>
  );
});

IconLaptop.displayName = 'IconLaptop';

export { IconLaptop };
