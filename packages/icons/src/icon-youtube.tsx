import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconYoutube = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M941.3 599.9c-10.3 38.6-40.7 69-79.2 79.3C792.2 698 512 698 512 698s-280.2 0-350.1-18.7C123.3 669 93 638.6 82.7 600 64 530 64 384 64 384s0-146 18.7-215.9c10.3-38.6 40.7-69 79.2-79.3C231.8 70 512 70 512 70s280.2 0 350.1 18.8c38.6 10.3 68.9 40.7 79.2 79.3C960 238 960 384 960 384s0 146-18.7 215.9zM423 250V518l232-133-232-135z" />
      </g>
    </svg>
  );
});

IconYoutube.displayName = 'IconYoutube';

export { IconYoutube };
